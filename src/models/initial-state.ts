import { AppState } from './app-state';

const TriviaState = {
    answers: undefined,
    currentQuestion: 0,
    questions: undefined
}

export const InitialState: AppState = {
    trivia: TriviaState,
    router: undefined
}
