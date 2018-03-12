const surveyQuestions = [
  {
    id: 1,
    question: 'This is Sample Question 1',
    ansType: 'text',
    answer: ''
  },
  {
    id: 2,
    question: 'This is Sample Question 2 with Radio Option',
    ansType: 'radio',
    options: ['Radio Option 1', 'Radio Option 2', 'Radio Option 3'],
    answer: ''
  },
  {
    id: 3,
    question: 'This is Sample Question 3 with Dropdown Options',
    ansType: 'dropdown',
    options: ['Drop down Option 1', 'Drop down Option 2', 'Drop down Option 3'],
    answer: ''
  },
  {
    id: 4,
    question: 'What is your Age ?',
    ansType: 'text',
    answer: ''
  },
  {
    id: 5,
    question: 'In which Country you were born ?',
    ansType: 'dropdown',
    options: ['USA', 'India', 'UK', 'Germany'],
    answer: ''
  }
];

export default surveyQuestions;
