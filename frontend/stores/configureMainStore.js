import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers/mainApp'


export default function configureStore(_initialData) {
  const store = createStore(
    reducer,
    undefined,
    // Middlewares
    compose(
      applyMiddleware(thunk)
    )
  );

  module.hot.accept('../reducers/mainApp', () => {
    store.replaceReducer(require('../reducers/mainApp').default)
});

  return store;
}
