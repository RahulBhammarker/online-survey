import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from './survey/survey.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private suveyService: SurveyService) { }

  ngOnInit() {
    this.router.navigate(['/survey', this.suveyService.getSuveyQuestions()[0].id]);
  }
}
