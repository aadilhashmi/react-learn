const EmployeDefaultState = {
  Employe: [
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

export const EmployeReducer = (state = EmployeDefaultState, action) => {
  switch (action.type) {
    case "ADD_NEW_GROUP":
      return { ...state, Employe: [...state.Employe, action.Employe] };
    default:
      return state;
  }
};
