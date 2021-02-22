const EmployeDefaultState = {
  Employe: [
    {
      id: "24555",
      name: "Shaikh Salman",
      image: "salman.jpg",
      desc: "API ",
    },
    {
      id: "24556",
      name: "Khawaja pasha",
      image: "",
      desc: "REACT DEVELOPER",
    },
    {
      id: "24557",
      name: "Md Rizwan",
      image: "",
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
