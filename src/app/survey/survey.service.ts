import { Injectable, HostListener } from '@angular/core';
import surveys from '../../assets/survey-mock';
import { Router } from '@angular/router';

@Injectable()
export class SurveyService {
  surveyQuestions = surveys;
  currentQuestId;

  constructor(private router: Router) {
    if (localStorage.getItem('surveyQuestions')) {
      this.surveyQuestions = JSON.parse(localStorage.getItem('surveyQuestions'));
    }
    if (localStorage.getItem('surveyCurrentQuestionId')) {
      setTimeout(() => {
        router.navigate(['/survey', +localStorage.getItem('surveyCurrentQuestionId') + +1]);
      });
    }

  }

  // For Fetching all the questions from the outside the application like API or Local Storage
  getSuveyQuestions() {
    this.surveyQuestions = this.surveyQuestions.sort((a, b) => {
      const keyA = a.id, keyB = b.id;
      // Compare
      if (keyA < keyB) { return -1; }
      if (keyA > keyB) { return 1; }
      return 0;
    });
    return this.surveyQuestions;
  }

  // Function to set the current question state which is sharable by every component
  setCurrentQuesId(quesId) {
    this.currentQuestId = quesId;
  }

  getCurrentQuesId() {
    return this.currentQuestId;
  }

  getNextQuesId() {
    return this.surveyQuestions[this.currentQuestId + 1] ? this.surveyQuestions[this.currentQuestId + 1].id : null;
  }

  getPrevQuesId() {
    return this.surveyQuestions[this.currentQuestId - 1] ? this.surveyQuestions[this.currentQuestId - 1].id : null;
  }

  isLastQuestion() {
    return this.surveyQuestions.length - 1 === this.currentQuestId;
  }

  getQuestion(id) {
    this.setCurrentQuesId(id - 1);
    return this.surveyQuestions[id - 1] ? this.surveyQuestions[id - 1] : {};
  }

  saveToLocalStorage(localStorageSkip: Boolean) {
    if (localStorageSkip) {
      localStorage.clear();
    } else {
      localStorage.setItem('surveyQuestions', JSON.stringify(this.surveyQuestions));
      localStorage.setItem('surveyCurrentQuestionId', JSON.stringify(this.currentQuestId));
    }
  }
}
