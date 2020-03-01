
import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import rootEpic from './rootEpic';

export default function configureStore(initialState = {}) {
  const epicMiddleware = createEpicMiddleware({
    dependencies: {},
  });
  
  const middlewares = [
    epicMiddleware,
  ];

  const middlewareEnhancer = applyMiddleware(
    ...middlewares,
  );

  const enhancers = [
    middlewareEnhancer,
  ];

  const composedEnhancers = composeWithDevTools(
    ...enhancers,
  );

  const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers,
  );
  
  epicMiddleware.run(rootEpic);

  return store;
}
