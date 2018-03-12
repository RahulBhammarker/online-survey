import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey/survey.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  questionsAttempted;
  surveyQuestions;

  constructor(private surveyService: SurveyService) { }

  ngOnInit() {
    this.surveyQuestions = this.surveyService.getSuveyQuestions();
    this.calculateQuestionsAnswered();
  }

  calculateQuestionsAnswered() {
    this.questionsAttempted = 0;
    this.surveyQuestions.forEach(element => {
      if (!!element.answer) {
        this.questionsAttempted++;
      }
    });
  }
}
