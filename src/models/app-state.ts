import { Answer } from './answer';
import { Question } from './question';

interface TriviaState {
    answers: Answer[] | undefined;
    currentQuestion: number;
    questions: Question[] | undefined;
}

export interface AppState {
    router: any;
    trivia: TriviaState;
}
