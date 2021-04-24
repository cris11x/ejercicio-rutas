import React,{ useMemo } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { getPeopleByName } from "../../selectors/getPeople";
import { PeopleCard } from "../people/PeopleCard";

export const SearchScreen = ({ history }) => {
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const peopleFiltered = useMemo(() => getPeopleByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Buscar Persona</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Formulario de busqueda</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-outline-info btn-block">
              Buscar
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Result</h4>
          <hr />
          {
            q === "" && <div className="alert alert-info">Buscar Persona</div>
          }
          {
            ( q !== '' && peopleFiltered.length === 0 ) &&
                <div className="alert alert-danger">
                    no hay resultados con {q}
                </div>
          }
          {
                    peopleFiltered.map( people => (
                        <PeopleCard key={people.id} people={people} />
                    ))
          }
        </div>
      </div>
    </>
  );
};
