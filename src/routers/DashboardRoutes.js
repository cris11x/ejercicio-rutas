import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { CoordinatorScreen } from "../components/coordinator/CoordinatorScreen";
import { PeopleScreen } from "../components/people/PeopleScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { StudnetScreen } from "../components/Student/StudnetScreen";
import { TeacherScreen } from "../components/teacher/TeacherScreen";
import { Navbar } from "../components/ui/Navbar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/profesores" component={ TeacherScreen } />
          <Route exact path="/estudiantes" component={ StudnetScreen } />
          <Route exact path="/people/:estId" component={ PeopleScreen } />
          <Route exact path="/cordinadores" component={ CoordinatorScreen } />
          <Route exact path="/search" component = { SearchScreen } />

          <Redirect to="/profesores" />
        </Switch>
      </div>
    </>
  );
};
