import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  questNum: number;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getSurveyQuestion();
  }

  getSurveyQuestion(): void {
    this.questNum = +this.route.snapshot.paramMap.get('questNum');
  }
}
