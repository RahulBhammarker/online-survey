import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
  { path: '', redirectTo: '/survey/1', pathMatch: 'full' },
  { path: 'survey/:questNum', component: SurveyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
