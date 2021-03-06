import React from "react";
import ItemList from "../item-list";
import { withData, withSwapiService } from "../hoc-helper";

const withChildFunction = (Wrapped, fn) => {
  return props => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const renderName = ({ name }) => <span>{name}</span>;
const renderNameAndModel = ({ name, model }) => (
  <span>
    {name} ({model})
  </span>
);

const mapPersonMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPeople
  };
};
const mapStarshipMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllStarships
  };
};
const mapPlanetMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const PersonList = withSwapiService(
  withData(withChildFunction(ItemList, renderName)),
  mapPersonMethodsToProps
);
const PlanetList = withSwapiService(
  withData(withChildFunction(ItemList, renderName)),
  mapPlanetMethodsToProps
);
const StarshipList = withSwapiService(
  withData(withChildFunction(ItemList, renderNameAndModel)),
  mapStarshipMethodsToProps
);

export { PersonList, PlanetList, StarshipList };
