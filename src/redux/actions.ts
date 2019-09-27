import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from '../models/action-types';
import { Answer } from '../models/answer';
import { Question } from '../models/question';
import { RouteType } from '../models/routes';
import { push } from 'connected-react-router';

export const answerQuestion = (answer: Answer) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(logAnswer(answer));
        if (answer.questionID < 9) {
            dispatch(nextQuestion());
        } else {
            dispatch(endGame());
        }
    }
}
export const endGame = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch(navigateTo(RouteType.RESULTS));
    }
}
export const logAnswer = (answer: Answer) => ({ type: ActionTypes.LOG_ANSWER, payload: answer });
export const navigateTo = (route: RouteType) => (dispatch: any) => {
    try {
        dispatch(push(route));
    } catch(err) {
        console.log("Cannot navigate:", err);
    }
}
export const nextQuestion = () => ({ type: ActionTypes.NEXT_QUESTION });
export const setQuestions = (questions: Question[]) => ({ type: ActionTypes.SET_QUESTIONS, payload: questions });
export const startGame = () => ({ type: ActionTypes.START_GAME });

export const fetchQuestions = () => {
    const questions: Question[] = [];
    return (dispatch: Dispatch<any>) => {
        try {
            axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
            .then((res: any) => {
                res.data.results.forEach((q: any, i: number) => {
                    questions.push({
                        questionID: i.toString(),
                        category: q.category,
                        type: q.type,
                        question: q.question ? q.question
                            // eslint-disable-next-line
                            .replace(/&quot;/g, '\"')
                            .replace(/&#039;/g, '\'') : undefined,
                        difficulty: q.difficulty,
                        correctAnswer: q.correct_answer === "True",
                        incorrectAnswers: q.incorrect_answers
                    });
                });
                dispatch(setQuestions(questions));
            });
        } catch (e) {
            console.log(e);
        }
    };
}
