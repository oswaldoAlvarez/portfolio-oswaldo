import React, { useState, useEffect } from "react";
import { Layout, Col, Input } from "antd";
import Header from "../headerCine/HeaderCine";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import MovieCatalog from "../movieCatalog/MovieCatalog";
import { URL_API, API } from "../../../utils/cine-simulator/constants";

import "../../../styles/cine-simulator/search/search.scss";

function Search(props) {
  const { location, history } = props;
  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    (async () => {
      const searchValue = queryString.parseUrl(location.search);
      const { s } = searchValue.query;
      const response = await fetch(
        `${URL_API}/search/movie?api_key=${API}&language=es-ES&query=${s}&page=1`
      );
      const movies = await response.json();
      setSearchValue(s);
      setMovieList(movies);
    })();
  }, [location.search]);

  const onChangeSearch = (e) => {
    const urlParams = queryString.parse(location.search);
    urlParams.s = e.target.value;
    history.push(`?${queryString.stringify(urlParams)}`);
    setSearchValue(e.target.value);
  };

  return (
    <Layout>
      <Header />
      <div>
        <Col span={12} offset={6} className="search">
          <h1>Busca tu película</h1>
          <Input onChange={onChangeSearch} value={searchValue} />
        </Col>
        {movieList.results && (
          <div>
            <div className="search-movieCatalog">
              <MovieCatalog movies={movieList} />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default withRouter(Search);
