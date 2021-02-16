const groupReducer = (state = groupsDefaultState, action) => {
  switch (action.type) {
    case "ADD_NEW_GROUP":
      //   triple dot ka mtlb spread opretor
      return {
        ...state,
        group: [action.group, ...state.group],
      };
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
