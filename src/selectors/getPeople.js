import { users } from "../data/users";

const orderArrayObject = (array) => {
  return array.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
};

export const getPeopleByRole = (role) => {
  const validRoles = ["Profesor", "Estudiante", "Cordinador"];
  if (!validRoles.includes(role)) {
    throw new Error(`El rol ${role} no es correcto`);
  }

  let x = users.filter(
    (user) => user.role.filter((rol) => rol === role).length > 0
  );

  let z = orderArrayObject(x);

  return z;
};

export const getPeopleById = (idEst) => {
  return users.find((user) => user.id == idEst);
};


export const getPeopleByName = ( name ) => {

  if (name === '') {
      return [];
  }

  name = name.toLocaleLowerCase();
  return users.filter( user => user.name.toLocaleLowerCase().includes( name ) );

}

