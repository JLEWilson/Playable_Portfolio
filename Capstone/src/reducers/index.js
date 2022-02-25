import { combineReducers } from 'redux';
import repositoriesReducer from './repositories-reducer';

const rootReducer = combineReducers({
  repositories: repositoriesReducer
});

export default rootReducer;