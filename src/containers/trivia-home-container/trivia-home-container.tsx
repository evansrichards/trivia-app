import * as React from 'react';
import { connect } from 'react-redux';
import { Action, bindActionCreators, Dispatch } from 'redux';

import { fetchQuestions } from '../../redux/actions';
import { AppState } from '../../models/app-state';
import { Question } from '../../models/question';
import { Bar, Button, Card } from '../../components';
import { RouteType } from '../../models/routes';
import * as Text from '../../components/text';

interface Props {
    questions: Question[] | undefined;
    fetchQuestions: () => any;
}

export class TriviaHomeView extends React.Component<Props> {
    public render() {
        return (
            <div className="content">
                <Card>
                    <Text.Heading>Welcome to the Trivia Challenge</Text.Heading>
                    <Text.Paragraph>You will be presented with 10 True or False questions.</Text.Paragraph>
                    <Text.Paragraph>Can you score 100%?</Text.Paragraph>
                </Card>
                <Bar>
                    <Button to={RouteType.GAME}>Start Game</Button>
                </Bar>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    questions: state.trivia.questions
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => bindActionCreators({fetchQuestions}, dispatch);

export const TriviaHomeContainer = connect(
mapStateToProps, mapDispatchToProps)(TriviaHomeView);
