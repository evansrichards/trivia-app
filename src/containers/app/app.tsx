import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import { RouteType } from '../../models/routes';
import { TriviaHomeContainer, TriviaQuestionsContainer, TriviaResultsContainer } from '..';
import * as Text from '../../components/text';

export const App = () => (
  <Switch>
    <React.Fragment>
      <div className="content banner">
        <Link to={RouteType.BASE}>
            <Text.Subheading>Trivia Game</Text.Subheading>
        </Link>
      </div>
      <Route path="/" exact={true} component={TriviaHomeContainer} />
      <Route path="/game" component={TriviaQuestionsContainer} />
      <Route path="/results" component={TriviaResultsContainer} />
      </React.Fragment>
  </Switch>
);
