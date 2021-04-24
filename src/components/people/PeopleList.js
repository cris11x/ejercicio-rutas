import React, { useMemo } from "react";
import { getPeopleByRole } from "../../selectors/getPeople";
import { PeopleCard } from "./PeopleCard";
import "./people.css";

export const PeopleList = ({ role }) => {
  const peoples = useMemo(() => getPeopleByRole(role), [role]);
  return (
    <div className="row row-cols-3">
      {peoples.map((people) => (
        <PeopleCard key={people.id} people={people} />
      ))}
    </div>
  );
};
