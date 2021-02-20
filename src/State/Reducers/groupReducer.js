const groupsDefaultState = {
  groups: [
    {
      name: "Redux Practical",
      image: "redux.png",
      desc: "This Is First Group Created With Redux",
    },
    {
      name: "Learning Redux",
      image: "redux2.png",
      desc: "This Is First Group Created With Redux",
    },
    {
      name: "React Developers",
      image: "redux3.png",
      desc: "This Is First Group Created With Redux",
    },
  ],
};

export const groupReducer = (state = groupsDefaultState, action) => {
  switch (action.type) {
    case "ADD_NEW_GROUP":
      return { ...state, groups: [...state.groups, action.groups] };
    default:
      return state;
  }
};
