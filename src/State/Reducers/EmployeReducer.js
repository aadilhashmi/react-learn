import { v4 as uuidv4 } from "uuid";

const EmployeDefaultState = {
  Employe: [
    {
      id: uuidv4(),
      name: "Shaikh Salman",
      image: "salman2.jpg",
      desc: "API ",
    },
    {
      id: "24556",
      name: "Khawaja pasha",
      image: "khwaja.jpg",
      desc: "REACT DEVELOPER",
    },
    {
      id: "24557",
      name: "Md AAMER",
      image: "aamer.jpg",
      desc: "FRONTEND DEVELOPER",
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
