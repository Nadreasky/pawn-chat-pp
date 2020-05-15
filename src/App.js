import React, { Suspense, lazy, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './App.css';

import Spinner from './components/spinner/spinner.component';

import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

const WelcomePage = lazy(() => import('./pages/welcome-page/welcome-page.component'));
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const SignUpPage = lazy(() => import('./pages/signup-page/signup-page.component'));
const SignInPage = lazy(() => import('./pages/signin-page/signin-page.component'));

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

  return (
    <React.Fragment>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path='/signup' render={() => currentUser ? (<Redirect to='/' />) : (<SignUpPage />)} />
          <Route path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInPage />)} />
          <Route path='/' render={() => currentUser ? (<HomePage />) : (<WelcomePage />)} />
        </Switch>
      </Suspense>
    </React.Fragment>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
