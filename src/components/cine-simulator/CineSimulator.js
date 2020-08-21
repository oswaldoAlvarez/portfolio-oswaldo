import React from "react";
import FooterProjects from "../FooterProjects";
import Header from "./headerCine/HeaderCine";
import useFetch from "../../hooks/useFetch";
import SliderMovies from "./sliderMovies/SliderMovies";
import { URL_API, API } from "../../utils/cine-simulator/constants";
import MovieList from "./movieList/MovieList";
import { Row, Col } from "antd";

function CineSimulator() {
  const newMovies = useFetch(
    `${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`
  );
  const popularMovies = useFetch(
    `${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`
  );
  const topRatedMovies = useFetch(
    `${URL_API}/movie/top_rated?api_key=${API}&language=es-ES&page=1`
  );
  return (
    <>
      <Header />
      <SliderMovies movies={newMovies} />
      <Row className="movies-row">
        <Col className="movies-col" span={12}>
          <MovieList title="Peliculas Populares" movies={popularMovies} />
        </Col>
        <Col className="movies-col" span={12}>
          <MovieList
            title="Peliculas Mejor Puntuadas"
            movies={topRatedMovies}
          />
        </Col>
      </Row>
      <FooterProjects />
    </>
  );
}

export default CineSimulator;
