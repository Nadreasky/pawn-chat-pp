import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Spinner from '../../components/spinner/spinner.component';

import './homepage.styles.scss';

const Header = lazy(() => import('../../components/header/header.component'));
const ChattingComponent = lazy(() => import('../../components/chatting/chatting.component'));
const ForFun = lazy(() => import('../../components/for-fun/for-fun.component'));

const Homepage = () => {

  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Suspense fallback={ <Spinner /> }>
          <Route exact path='/' component={ ChattingComponent } />
          <Route exact path='/forfun' component={ ForFun } />
        </Suspense>
      </Switch>
    </React.Fragment>
  )
};

export default Homepage;
