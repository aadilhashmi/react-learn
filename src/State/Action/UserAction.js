export const getAllUser = (name, id) => ({
  type: "ADD_NEW_USER",
  User: {
    name,
    id,
  },
});
