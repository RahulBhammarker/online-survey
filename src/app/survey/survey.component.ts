import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SurveyService } from './survey.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  surveyQues;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    public surveyService: SurveyService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.surveyQues = this.surveyService.getQuestion(paramMap.get('questId'));
    });
  }

  goBack() {
    if (this.surveyService.getPrevQuesId()) {
      this.location.back();
    }
  }

  goNext() {
    if (this.surveyService.getNextQuesId()) {
      this.router.navigate(['/survey', this.surveyService.getNextQuesId()]);
    } else if (this.surveyService.isLastQuestion()) {
      this.router.navigate(['/summary']);
    }
  }
}
