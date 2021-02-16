const groupReducer = (state = groupsDefaultState, action) => {
  switch (action.type) {
    case "ADD_NEW_GROUP":
  }
};

const groupsDefaultState = {
  groups: [
    {
      name: "Redux Practicle",
      image: "redux3.png",
      desc: "This first Group Created With Redux",
    },
    {
      name: "Learning Redux",
      image: "redux.png",
      desc: "This first Group Created With Redux",
    },
    {
      name: "React Devolopers",
      image: "redux2.png",
      desc: "This first Group Created With Redux",
    },
  ],
};
