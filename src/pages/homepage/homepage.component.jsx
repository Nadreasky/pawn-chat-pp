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
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path='/forfun' component={ForFun} />
          <Route exact path='/' component={ChattingComponent} />
        </Switch>
      </Suspense>
    </React.Fragment>
  )
};

export default Homepage;
