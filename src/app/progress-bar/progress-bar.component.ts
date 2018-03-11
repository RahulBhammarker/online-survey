import { Component, OnInit, Input } from '@angular/core';
import { SurveyService } from '../survey/survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  progressPercent = 0;
  constructor(private surveyService: SurveyService, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((val) => this.calculateProgress());
  }

  calculateProgress() {
    let questionsAttempted = 0;
    const surveyQuestions = this.surveyService.getSuveyQuestions();
    const surveyQuestionsLength = surveyQuestions.length;
    surveyQuestions.forEach(element => {
      if (!!element.answer) {
        questionsAttempted++;
      }
    });
    this.progressPercent = (questionsAttempted / surveyQuestionsLength) * 100;
  }
}
