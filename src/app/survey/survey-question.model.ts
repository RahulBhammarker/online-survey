export class SurveyQuestion {
  id: number;
  question: string;
  ansType: string;
  options?: [string];
  state?: string;
  answer?: string;
}
