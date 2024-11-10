import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StagesComponent } from './stages/stages.component';
import { AddstageComponent } from './addstage/addstage.component';

const routes: Routes = [
  { path : 'addstage', component:AddstageComponent },
  { path : 'stages', component:StagesComponent },
  { path : '**',  redirectTo: '/stages' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
