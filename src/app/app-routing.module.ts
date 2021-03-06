import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BridgeInfoComponent } from './bridge-info/bridge-info.component'
import { BridgeFormTemplateDrivenComponent } from './bridge-form-template-driven/bridge-form-template-driven.component'
const routes: Routes = [
  // { path: '', component: SomeComponent, ...}
  { path: 'bridges/:id', component: BridgeInfoComponent },
  { path: 'bridges', component: BridgeInfoComponent },
  { path: 'new-template', component: BridgeFormTemplateDrivenComponent },
  { path: '', redirectTo: 'bridges', pathMatch: 'full'} // exactly matching
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
