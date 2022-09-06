import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './components/redux/root-reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {checkAuth} from './components/redux/api-create';
import {requireAuthorization} from './components/redux/user-process/action-user';
import {createAPI} from './components/api';
import {userAuth} from './mocks/constants';

const api = createAPI((dispatch) => dispatch(
    requireAuthorization(userAuth.NO_AUTH)
));

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    ));

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />,
    </Provider>,

    document.getElementById(`root`)
);
