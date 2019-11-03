import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: MainComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }