import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';

const App = () => {
  return (
    <>
      <Switch>
        {routes.map((entry) => {
          return <Route exact path={entry.path} component={entry.component} />;
        })}
      </Switch>
    </>
  );
};

export default App;
