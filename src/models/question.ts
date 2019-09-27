export interface Question {
    questionID: string | undefined;
    category: string | undefined;
    type: boolean;
    difficulty: string | undefined;
    question: string | undefined;
    correctAnswer: boolean | undefined;
    incorrectAnswers: Array<string>;
}
