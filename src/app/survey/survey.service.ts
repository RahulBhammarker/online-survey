import { Injectable } from '@angular/core';

@Injectable()
export class SurveyService {
  surveyQuestions = [
    {
      id: 1,
      question: 'Sample Question 1',
      ansType: 'text',
      answer: '',
      isAnswered: ''
    },
    {
      id: 2,
      question: 'Sample Question 2 with Radio Option',
      ansType: 'radio',
      options: ['Radio Option 1', 'Radio Option 2'],
      answer: '',
      isAnswered: ''
    },
    {
      id: 3,
      question: 'Sample Question 3 with Dropdown options',
      ansType: 'dropdown',
      options: ['Drop down Option 1', 'Drop down Option 2'],
      answer: '',
      isAnswered: ''
    }
  ];
  currentQuestId;
  constructor() { }

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
    return this.surveyQuestions[id - 1];
  }
}
