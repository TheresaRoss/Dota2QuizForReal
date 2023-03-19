//Proper way to use TS  lol
export interface Question_Prop{
    question: question_form
}
type question_form = {
    choice: string[];
    correct_choice: string;
    question: string;
  }