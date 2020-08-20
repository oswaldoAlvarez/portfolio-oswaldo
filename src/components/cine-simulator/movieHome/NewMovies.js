import React, { useState, useEffect } from "react";
import FooterProjects from "../../FooterProjects";
import { Row, Col, Layout } from "antd";
import MenuTop from "../menuTop/MenuTop";
import { URL_API, API } from "../../../utils/cine-simulator/constants";
import Loading from "../loading/Loading";
import MovieCatalog from "../movieCatalog/MovieCatalog";

import "../../../styles/cine-simulator/movieHome/newMovies.scss";

function NewMovies() {
  const { Header, Content } = Layout;
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${URL_API}/movie/now_playing?api_key=${API}&lenguage=es-ES&page=${page}`
      );
      const movies = await response.json();
      setMovieList(movies);
    })();
  }, [page]);

  return (
    <Layout>
      <Header>
        <MenuTop />
      </Header>
      <Row>
        <Col span={24} style={{ textAlign: "center", marginTop: 25 }}>
          <h1 style={{ fontSize: 35, fontWeigh: "bold" }}>
            Ultimos lanzamientos
          </h1>
        </Col>
        {movieList.results ? (
          <div className="movieList-results">
            <MovieCatalog movies={movieList} />
          </div>
        ) : (
          <Col span={24}>
            <Loading />
          </Col>
        )}
        <Col span={24}></Col>
      </Row>
    </Layout>
  );
}

export default NewMovies;
