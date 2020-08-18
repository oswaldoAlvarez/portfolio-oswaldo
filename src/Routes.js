import React from "react";
import { Route, Switch } from "react-router-dom";
import TweetSimulator from "./components/tweet-simulator/TweetSimulator";
import CineSimulator from "./components/cine-simulator/CineSimulator";
import NewMovies from "./components/cine-simulator/movieHome/NewMovies";
import PopularMovies from "./components/cine-simulator/movieHome/PopularMovies";
import Search from "./components/cine-simulator/search/Search";
import Movie from "./components/cine-simulator/movieHome/Movie";
import Error404 from "./components/cine-simulator/error404/Error404";

function Routes() {
  return (
    <div>
      <Switch>
        {/*Rutas del TweetSimulator*/}
        <Route exact path="/" component={TweetSimulator} />
        {/*Rutas del CineSimulator*/}
        <Route exact path="/cine-simulator/home" component={CineSimulator} />
        <Route exact path="/cine-simulator/new-movies" component={NewMovies} />
        <Route
          exact
          path="/cine-simulator/popular-movies"
          component={PopularMovies}
        />
        <Route exact path="/cine-simulator/search-movies" component={Search} />
        <Route exact path="/cine-simulator/movie/:id" component={Movie} />
        {/*Apartir de aquí cualquier ruta no existente dará error404 en el CineSimulator*/}
        <Route exact path="/cine-simulator/*" component={Error404} />
      </Switch>
    </div>
  );
}

export default Routes;
