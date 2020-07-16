// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { BaseComponent } from './views/theme/base/base.component';
import { ErrorPageComponent } from './views/theme/content/error-page/error-page.component';
import { TranslateGuard } from './translate.guard';


const routes: Routes = [
    {
        path: '',
        component: BaseComponent,
        canActivate: [],
        children: [
            {
                path: '',
                canActivate: [TranslateGuard],
                data: { moduleName: 'dashboard' },
                loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            // {
            //     path: 'mail',
            //     canActivate: [TranslateGuard],
            //     data: { moduleName: 'mail' },
            //     loadChildren: () => import('./views/pages/apps/mail/mail.module').then(m => m.MailModule)
            // },
            {
                path: 'configuration',
                canActivate: [TranslateGuard],
                data: { moduleName: 'configuration' },
                loadChildren: () => import('./views/pages/configuration/configuration.module').then(m => m.ConfigurationModule)
            },
            {
                path: 'ecommerce',
                canActivate: [TranslateGuard],
                data: { moduleName: 'ecommerce' },
                loadChildren: () => import('./views/pages/apps/e-commerce/e-commerce.module').then(m => m.ECommerceModule),
            },
            {
                path: 'ngbootstrap',
                canActivate: [TranslateGuard],
                data: { moduleName: 'ngbootstrap' },
                loadChildren: () => import('./views/pages/ngbootstrap/ngbootstrap.module').then(m => m.NgbootstrapModule)
            },
            {
                path: 'material',
                canActivate: [TranslateGuard],
                data: { moduleName: 'material' },
                loadChildren: () => import('./views/pages/material/material.module').then(m => m.MaterialModule)
            },
            {
                path: 'wizard',
                canActivate: [TranslateGuard],
                data: { moduleName: 'wizard' },
                loadChildren: () => import('./views/pages/wizard/wizard.module').then(m => m.WizardModule)
            },
            {
                path: 'builder',
                canActivate: [TranslateGuard],
                data: { moduleName: 'builder' },
                loadChildren: () => import('./views/theme/content/builder/builder.module').then(m => m.BuilderModule)
            },
            {
                path: 'error/403',
                component: ErrorPageComponent,
                data: {
                    'type': 'error-v6',
                    'code': 403,
                    'title': '403... Access forbidden',
                    'desc': 'Looks like you don\'t have permission to access for requested page.<br> Please, contact administrator'
                }
            },
            { path: 'error/:type', component: ErrorPageComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
