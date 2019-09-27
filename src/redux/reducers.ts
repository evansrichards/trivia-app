import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { ActionTypes } from '../models/action-types';
import { AppState } from '../models/app-state';
import { InitialState } from '../models/initial-state';

const triviaReducer = (state = InitialState.trivia, action: any) =>  {
  switch (action.type) {
    case ActionTypes.LOG_ANSWER:
        const answers = state.answers ? state.answers : [];
        answers.push(action.payload);
        return {
            ...state,
            answers,
        }
    case ActionTypes.NEXT_QUESTION:
        return {
            ...state,
            currentQuestion: state.currentQuestion + 1
        }
    case ActionTypes.SET_QUESTIONS:
        return {
            ...state,
            questions: action.payload
        };
    case ActionTypes.START_GAME:
        return {
            ...state,
            currentQuestion: 0,
        }
    default:
        return state;
  }
}

export const reducers = (history: any) => combineReducers<AppState>({
  router: connectRouter(history as any),
  trivia: triviaReducer as any,
});
