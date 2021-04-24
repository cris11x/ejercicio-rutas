import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getPeopleById } from "../../selectors/getPeople";

export const PeopleScreen = ({ history }) => {
  console.log(useParams());

  const { estId } = useParams();

  console.log(estId);

  const people = useMemo(() => getPeopleById(estId), [estId]);

  console.log(people);

  if (!people) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  const { id, name, last_name, img, role, profession } = people;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={img}
          alt={name}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8 animate__animated animate__fadeInLeft">
        <h3>
          {" "}
          {name} {last_name}
        </h3>
        <h5>Profesion/es</h5>
        <ul className="list-group list-group-flush">
          {profession.map((prof) => (
            <li className="list-group-item">{prof}</li>
          ))}
        </ul>
        <h5>Rol/es</h5>
        <ul className="list-group list-group-flush">
          {role.map((rol) => (
            <li className="list-group-item">{rol}</li>
          ))}
        </ul>

        <button className="btn btn-outline-info" onClick={handleReturn}>
          Regrear
        </button>
      </div>
    </div>
  );
};
