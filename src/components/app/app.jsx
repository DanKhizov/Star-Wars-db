import React, { Component } from "react";
import "./app.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SwapiService from "../../services/swapi-service";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import { SwapiServiceProvider } from "../swapi-service-context";
import { PeoplePage, PlanetsPage, StarshipPage } from "../pages";
import { StarshipDetails } from "../sw-components";

export default class App extends Component {
  swapiService = new SwapiService();

  state = { showRandomPlanet: true, hasError: false, isLoggedIn: false };

  onLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) return <ErrorIndicator />;
    return (
      <SwapiServiceProvider value={this.swapiService}>
        <Router>
          <div className="stardb-app">
            <Header />
            <RandomPlanet />
            <Switch>
              <Route
                path="/"
                exact
                render={() => <h2>Welcome to Star Wars DB</h2>}
              />
              <Route path="/people/:id?" component={PeoplePage} />
              <Route path="/planets/" component={PlanetsPage} />
              <Route path="/starships/" exact component={StarshipPage} />
              <Route
                path="/starships/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return <StarshipDetails itemId={id} />;
                }}
              />

              <Route render={() => <h2>Error 404</h2>} />
            </Switch>
          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
}
