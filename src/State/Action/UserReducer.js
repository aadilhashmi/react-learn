const userDefaultState = {
  User: [
    {
      id: uuvidv4(),
      name: "AADIL",
      desc: "learning redux ",
    },
    {
      id: uuvidv4(),
      name: "RIZWAN",
      desc: "learning ANGULAR  ",
    },
    {
      id: uuvidv4(),
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
