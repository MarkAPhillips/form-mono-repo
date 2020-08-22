import { combineReducers } from 'redux';

import { data } from './dataReducer';
import { form } from './formReducer';

export default combineReducers({
  form,
  data,
} as any);
