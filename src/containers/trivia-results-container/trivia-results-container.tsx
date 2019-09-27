import * as React from 'react';
import { connect } from 'react-redux';
import { Action, bindActionCreators, Dispatch } from 'redux';
import { Check, NotInterested } from '@material-ui/icons';

import { fetchQuestions } from '../../redux/actions';
import { AppState } from '../../models/app-state';
import { Answer } from '../../models/answer';
import { Question } from '../../models/question';
import { Bar, Button, Card } from '../../components';
import { RouteType } from '../../models/routes';
import * as Text from '../../components/text';
import * as _ from 'lodash';

interface Props {
    answers: Answer[] | undefined;
    questions: Question[] | undefined;
}

export class TriviaResultsView extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.calculateScore = this.calculateScore.bind(this);
    }

    public calculateScore() {
        let score = 0;
        if (this.props.questions) {
            this.props.questions.forEach((q: Question) => {
                const answer = q.correctAnswer!.toString();
                const myAnswer = this.props.answers && q.questionID ?
                    this.props.answers[q.questionID as any].answer.toString() : undefined;
                if (answer === myAnswer) { score =  score + 1; }
            });
        }
        return score;
    }

    public render() {
        return (
            <div className="content">
                <Card>
                    <Text.Subheading>You scored {this.calculateScore()} / 10!</Text.Subheading>
                    <ol className="result-list">
                        { this.props.questions ? this.props.questions.map((q: Question) => {
                            const answer = q.correctAnswer!.toString();
                            const myAnswer = this.props.answers && q.questionID ?
                                this.props.answers[q.questionID as any].answer.toString() : '';
                            return <li key={q.questionID} className="result">
                                <div>
                                    <Text.Paragraph>{q.question}</Text.Paragraph>
                                </div>
                                <div className={`result-row ${myAnswer === answer ? 'correct' : 'incorrect'}`}>
                                    {
                                        myAnswer === answer ?
                                            <p className="correct"><Check /></p>
                                        :
                                            <p className="incorrect"><NotInterested /></p>
                                    }
                                    <Text.Paragraph>{_.startCase(_.toLower(answer))}</Text.Paragraph>
                                </div>
                            </li>
                        }) : null }
                    </ol>
                </Card>
                <Bar>
                    <Button to={RouteType.BASE}>Play Again?</Button>
                </Bar>
            </div>
        );
    }

}

const mapStateToProps = (state: AppState) => ({
    answers: state.trivia.answers,
    questions: state.trivia.questions
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => bindActionCreators({fetchQuestions}, dispatch);

export const TriviaResultsContainer = connect(
mapStateToProps, mapDispatchToProps)(TriviaResultsView);
