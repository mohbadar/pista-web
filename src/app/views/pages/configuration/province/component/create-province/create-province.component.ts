import { Component, OnInit, ChangeDetectionStrategy, ElementRef, ViewChild, AfterViewInit, Output, Input, EventEmitter, Inject, } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { LayoutUtilsService, MessageType } from '../../../../../../core/_base/crud';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Province } from '../../model/province.model';
import { ProvinceService } from '../../service/province.service';


@Component({
    selector: 'kt-create-province',
    templateUrl: './create-province.component.html',
})
export class CreateProvinceComponent implements OnInit {

    @ViewChild('wizard', { static: true }) el: ElementRef;

    hasFormErrors: boolean = false;

    myForm: FormGroup;
    isLoading = false;
    passwordMatch: boolean;

    submitted = false;
    record: Province;

    constructor(
        private formBuilder: FormBuilder,
        private layoutUtilService: LayoutUtilsService,
        private router: Router,
        private provinceService: ProvinceService

    ) {



    }


    ngOnInit() {


        this.myForm = this.formBuilder.group({
            name: [, [Validators.required]],
            provinceCode: [, [Validators.required]],
        });




    }

    ngAfterViewInit(): void {
        // Initialize form wizard
        const wizard = new KTWizard(this.el.nativeElement, {
            startStep: 1
        });

        // Validation before going to next page
        wizard.on('beforeNext', function (wizardObj) {
            // validate the form and use below function to stop the wizard's step
            // wizardObj.stop();
        });

        // Change event
        wizard.on('change', function (wizard) {
            setTimeout(function () {
                KTUtil.scrollTop();
            }, 500);
        });
    }

    submit() {



        this.record = new Province;
        this.record.name = this.myForm.get('name').value;
        this.record.provinceCode = this.myForm.get('provinceCode').value;

        console.log("Form Data", this.record)

        this.provinceService.create(this.record).subscribe((response) => {
            this.myForm.reset({});
            const _createMessage = `Object has been registered!`;
            this.layoutUtilService.showActionNotification(_createMessage, MessageType.Create);
            this.routeHome();
        }, (err) => {
            const msg = 'There was an error creating sector';
            this.layoutUtilService.showActionNotification(msg);

        });



    }


    routeHome() {
        this.router.navigate(['/configuration/province']);
    }
}
