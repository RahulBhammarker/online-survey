import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { SurveyService } from './survey/survey.service';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [AppComponent, SurveyComponent, SummaryComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
