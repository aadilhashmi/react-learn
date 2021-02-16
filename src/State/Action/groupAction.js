const addNewGroup = (name, id) => ({
  // UNDER double qoutation capital latter must
  type: "ADD_NEW_GROUP",
  groups: {
    name,
    id,
  },
});
