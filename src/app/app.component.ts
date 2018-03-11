import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from './survey/survey.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private surveyService: SurveyService) { }
  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    this.surveyService.saveToLocalStorage();
  }

  ngOnInit() {
    this.router.navigate(['/survey', this.surveyService.getSuveyQuestions()[0].id]);
  }
}
