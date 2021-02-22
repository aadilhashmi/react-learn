import { createStore, combineReducers } from "redux";
import { groupReducer } from "../Reducers/groupReducer";
import { EmployeReducer } from "../Reducers/EmployeReducer";
export const configureStore = () => {
  const store = createStore(
    combineReducers({
      groupReducer,
      EmployeReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
