import React, { useState, useEffect } from "react";
import { Layout, Col, Row } from "antd";
import Header from "../headerCine/HeaderCine";
import { URL_API, API } from "../../../utils/cine-simulator/constants";
import Loading from "../loading/Loading";
import Pagination from "../pagination/Pagination";
import MovieCatalog from "../movieCatalog/MovieCatalog";

function PopularMovies() {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${URL_API}/movie/popular?api_key=${API}&lenguage=es-ES&page=${page}`
      );
      const movies = await response.json();
      setMovieList(movies);
    })();
  }, [page]);

  const onChangePage = (page) => {
    setPage(page);
  };

  return (
    <>
      <Header />
      <Row>
        <Col span={24} style={{ textAlign: "center", marginTop: 25 }}>
          <h1 style={{ fontSize: 35, fontWeigh: "bold" }}>
            Peliculas Populares
          </h1>
        </Col>
        {movieList.results ? (
          <>
            <div className="movieList-results">
              <MovieCatalog movies={movieList} />
            </div>
            <div className="movieList-pagination">
              <Pagination
                currentPage={movieList.page}
                totalItems={movieList.total_results}
                onChangePage={onChangePage}
              />
            </div>
          </>
        ) : (
          <Col span={24}>
            <Loading />
          </Col>
        )}
        <Col span={24}></Col>
      </Row>
    </>
  );
}

export default PopularMovies;
