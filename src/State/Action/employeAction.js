export const addNewEmploye = (name, id) => ({
  type: "ADD_NEW_EMPLOYE",
  Employe: {
    name,
    id,
  },
});
