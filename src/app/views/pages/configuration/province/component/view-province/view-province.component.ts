
import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, Output, Input, EventEmitter, Inject, } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { LayoutUtilsService, MessageType } from '../../../../../../core/_base/crud';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Province } from '../../model/province.model';
import { ProvinceService } from '../../service/province.service';

@Component({
    selector: 'kt-view-province',
    templateUrl: './view-province.component.html',
})
export class ViewProvinceComponent implements OnInit {

    item: Province;
    isLoading = false;
    readonly = true;
    hasFormErrors: boolean = false;
    loadingAfterSubmit: boolean = false;
    viewLoading: boolean = false;

    constructor(
        private provinceService: ProvinceService,
        private layoutUtilService: LayoutUtilsService,
        public dialogRef: MatDialogRef<ViewProvinceComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {

        this.item = this.data.item;
        console.log("Item", this.item);

    }

    ngOnInit() {

    }

    processStatus(status) {
        if (status == true) {
            return "Deleted"
        }
    }

}
