import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SummaryComponent } from './summary.component';
import { SurveyService } from '../survey/survey.service';

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SummaryComponent],
      providers: [SurveyService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate questions answred count', () => {
    component.ngOnInit();
    component.calculateQuestionsAnswered();
    expect(component.questionsAttempted).not.toBeNull();
    component.surveyQuestions[0]['answer'] = 'Test Answer';
    component.calculateQuestionsAnswered();
    expect(component.questionsAttempted).toEqual(1);
  });
});
