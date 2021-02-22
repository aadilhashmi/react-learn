const EmployeDefaultState = {
  Employe: [
    {
      id: "24555",
      name: "Shaikh Salman",
      image: "salamn.webp",
      desc: "API ",
    },
    {
      id: "24556",
      name: "Khawaja pasha",
      image: "redux2.png",
      desc: "REACT DEVELOPER",
    },
    {
      id: "24557",
      name: "Md Rizwan",
      image: "redux3.png",
      desc: "PHP DEVELOPER",
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
