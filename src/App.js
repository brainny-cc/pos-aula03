import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ContentWrapper from './components/ContentWrapper';
import Books from './screens/Books';
import Login from './screens/Login';
import Register from './screens/Register';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/books">
          <ContentWrapper>
            <Books />
          </ContentWrapper>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
