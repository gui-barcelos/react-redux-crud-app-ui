import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools  } from 'redux-devtools-extension';

const configureStore = () => {
    return applyMiddleware(thunk)(createStore)(rootReducer);
};

export default configureStore;