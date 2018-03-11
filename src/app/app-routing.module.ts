import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SurveyComponent } from './survey/survey.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path: '', redirectTo: '/survey', pathMatch: 'full' },
  { path: 'survey', component: SurveyComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'survey/:questId', component: SurveyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
