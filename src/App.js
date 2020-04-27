import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Spinner from './components/spinner/spinner.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const SignUpPage = lazy(() => import('./pages/signup-page/signup-page.component'));
const SignInPage = lazy(() => import('./pages/signin-page/signin-page.component'));
const ChattingPage = lazy(() => import('./pages/chatting-page/chatting-page.component'));

const App = () => {
  const isLoggedIn = false;

  return (
    <React.Fragment>
      <Switch>
        <Suspense fallback={ <Spinner /> }>
          <Route path='/signup' component={ SignUpPage } />
          <Route path='/signin' component={ SignInPage } />
          <Route exact path='/' render={() => isLoggedIn ? (<ChattingPage />) : (<HomePage />)} />
        </Suspense>
      </Switch>
    </React.Fragment>
  )
}

export default App;
