import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { SurveyComponent } from './survey.component';
import { SurveyService } from '../survey/survey.service';

describe('SurveyComponent', () => {
  let component: SurveyComponent;
  let fixture: ComponentFixture<SurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [SurveyComponent],
      providers: [SurveyService] // Using the Servey Service Directly instead of stub as its not accessing any real API as of now
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyComponent);
    component = fixture.componentInstance;
    component.surveyQues = {
      id: 1,
      question: 'Sample Question 1',
      ansType: 'text',
      answer: '',
      isAnswered: ''
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the surveyQues', () => {
    component.ngOnInit();
    expect(component.surveyQues).not.toBeNull();
  });

  it('should navigate to survey route on goNext', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    component.ngOnInit();
    component.goNext();
    expect(navigateSpy).toHaveBeenCalledWith(['/survey', 1]);
  });
});
