import { combineReducers } from 'redux';

import categories from './categories';
import results from './results';

export default combineReducers({
  categories,
  results,
});
