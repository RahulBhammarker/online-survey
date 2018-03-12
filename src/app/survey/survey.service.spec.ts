import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SurveyService } from './survey.service';

describe('SurveyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [SurveyService]
    });
  });

  it('should be created', inject([SurveyService], (service: SurveyService) => {
    expect(service).toBeTruthy();
  }));

  it('should sort the recived survey question array in acending order to their ids', inject([SurveyService], (service: SurveyService) => {
    service.surveyQuestions.forEach((question, index) => {
      expect(question.id).toEqual(index + 1);
    });
  }));

  it('should get the survey questions ', inject([SurveyService], (service: SurveyService) => {
    service.getSuveyQuestions();
    expect(service.surveyQuestions).not.toBeNull();
  }));

  it('should set the currently selected survey id', inject([SurveyService], (service: SurveyService) => {
    service.setCurrentQuesId('1');
    expect(service.currentQuestId).toEqual('1');
  }));

  it('should return the currently selected question id', inject([SurveyService], (service: SurveyService) => {
    service.setCurrentQuesId('1');
    expect(service.getCurrentQuesId()).toEqual('1');
  }));

  it('should return next question id in sequence', inject([SurveyService], (service: SurveyService) => {
    service.currentQuestId = 1;
    expect(service.getNextQuesId()).toEqual(3);
  }));

  it('should return previous question id in sequence', inject([SurveyService], (service: SurveyService) => {
    service.currentQuestId = 2;
    expect(service.getPrevQuesId()).toEqual(2);
  }));

  it('should return true if its a last question in sequence', inject([SurveyService], (service: SurveyService) => {
    service.currentQuestId = 4;
    expect(service.isLastQuestion()).toBeTruthy();
  }));

  it('should return the question object', inject([SurveyService], (service: SurveyService) => {
    const questDetails = service.getQuestion(1);
    expect(questDetails['id']).toEqual(1);
  }));
});
