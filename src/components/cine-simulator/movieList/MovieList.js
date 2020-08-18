import React from "react";
import { List, Avatar, Button } from "antd";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";
import { RightOutlined } from "@ant-design/icons";

import "../../../styles/cine-simulator/movieList/movieList.scss";

export default function MovieList(props) {
  const { movies, title } = props;

  if (movies.loading || !movies.result) {
    return <Loading />;
  }
  return (
    <List
      className="movie-list"
      size="default"
      header={<h2>{title}</h2>}
      bordered
      dataSource={movies.result.results}
      renderItem={(movie) => <RenderMovie movie={movie} />}
    />
  );
}

function RenderMovie(props) {
  const {
    movie: { title, id, poster_path },
  } = props;
  const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`;
  return (
    <List.Item className="movie-list__movie">
      <List.Item.Meta
        avatar={<Avatar src={posterPath} />}
        title={<Link to={`/cine-simulator/movie/${id}`}>{title}</Link>}
      />
      <Link to={`/cine-simulator/movie/${id}`}>
        <Button type="primary" shpe="circle" />
        <RightOutlined />
      </Link>
    </List.Item>
  );
}
