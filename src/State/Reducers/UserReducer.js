import { v4 as uuidv4 } from "uuid";

const userDefaultState = {
  User: [
    {
      id: uuidv4(),
      name: "AADIL",
      desc: "learning redux ",
    },
    {
      id: uuidv4(),
      name: "RIZWAN",
      desc: "learning ANGULAR  ",
    },
    {
      id: uuidv4(),
      name: "SALMAN",
      desc: "learning REACTJS ",
    },
  ],
};
export const UserReducer = (state = userDefaultState, action) => {
  switch (action.type) {
    case "ADD_NEW_USER":
      return {
        ...state,
        User: [...state.User, action.User],
      };
    default:
      return state;
  }
};
