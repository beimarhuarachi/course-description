import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import NotFound from 'app/core/components/NotFound';
import Courses from './courses/Courses';

export function Empty() {
  return (
    <div>
      empty home
    </div>
  );
}

export default function AppRouter() {
  return (
    <Switch>
      <Route exact path='/' render={() => <Redirect to='/home'/>} />
      <Route path='/home' component={Empty} />
      <Route path='/courses/:id' component={Courses} />
      <Route component={NotFound} />
    </Switch>
  );
}
