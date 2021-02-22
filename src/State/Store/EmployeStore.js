import { createStore, combineReducers } from "redux";
import { EmployeReducer } from "../Reducers/EmployeReducer";
export const EmployeStore = () => {
  const store = createStore(
    combineReducers({
      EmployeReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
