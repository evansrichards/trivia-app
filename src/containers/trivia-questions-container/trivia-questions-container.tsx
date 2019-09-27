import * as React from 'react';
import { connect } from 'react-redux';
import { Action, bindActionCreators, Dispatch } from 'redux';

import { answerQuestion, fetchQuestions, startGame } from '../../redux/actions';
import { AppState } from '../../models/app-state';
import { Answer } from '../../models/answer';
import { Question } from '../../models/question';
import { Bar, Button, Card } from '../../components';
import * as Text from '../../components/text';

interface Props {
    currentQuestion: number;
    questions: Question[] | undefined;
    answerQuestion: (answer: Answer) => any;
    fetchQuestions: () => any;
    startGame: () => any;
}

export class TriviaQuestionsView extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.answerQuestion = this.answerQuestion.bind(this);
        this.props.fetchQuestions();
        this.props.startGame();
    }

    answerQuestion = (answer: boolean) => {
        this.props.answerQuestion({ questionID: this.props.currentQuestion, answer: answer });
    }

    public render() {
        return (
            <div className="content">
                <Card>
                    <Text.Subheading>
                        {this.props.questions && this.props.questions[this.props.currentQuestion] ?
                            this.props.questions[this.props.currentQuestion].question : null}
                    </Text.Subheading>
                </Card>
                <Bar>
                    <Button onClick={() => this.answerQuestion(true)}>True</Button>
                    <Button onClick={() => this.answerQuestion(false)}>False</Button>
                </Bar>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    currentQuestion: state.trivia.currentQuestion,
    questions: state.trivia.questions
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => bindActionCreators({fetchQuestions, startGame, answerQuestion: (answer: Answer) => answerQuestion(answer)}, dispatch);

export const TriviaQuestionsContainer = connect(
mapStateToProps, mapDispatchToProps)(TriviaQuestionsView);
