import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { userReducer, usersReducer, postsReducer, postReducer } from './reducers';
import { appReducer } from './reducers/app-reducer';

const reducer = combineReducers({
	app: appReducer,
	user: userReducer,
	users: usersReducer,
	post: postReducer,
	posts: postsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOS__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
