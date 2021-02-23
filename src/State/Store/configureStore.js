import { createStore, combineReducers } from "redux";
import { groupReducer } from "../Reducers/groupReducer";
import { EmployeReducer } from "../Reducers/EmployeReducer";
import { UserReducer } from "../Reducers/UserReducer";
export const configureStore = () => {
  const store = createStore(
    combineReducers({
      groupReducer,
      EmployeReducer,
      UserReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
