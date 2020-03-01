import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import NotFound from 'app/core/components/NotFound';

export function Empty() {
  return (
    <div>
      remove this compoentn
    </div>
  )
}

export default function AppRouter() {
  return (
    <Switch>
      <Route exact path='/' render={() => <Redirect to='/home'/>} />
      <Route path='/home' component={Empty} />
      <Route path='/courses/:id' component={Empty} />
      <Route component={NotFound} />
    </Switch>
  );
}
