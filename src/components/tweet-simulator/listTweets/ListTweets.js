import React from "react";
import { Grid } from "@material-ui/core";
import Tweet from "../tweet/Tweet";

import "../../../styles/tweet-simulator/listTweets/listTweets.scss";

function ListTweets({ allTweets, deleteTweet }) {
  if (!allTweets || allTweets.length === 0) {
    return (
      <div className="list-tweets-empty">
        <h2 className="list-tweets-empty__title">No hay Tweets . . .</h2>
      </div>
    );
  }
  return (
    <Grid container spacing={3} className="list-tweets">
      {allTweets.map((tweet, index) => (
        <Grid key={index} item xs={4}>
          <Tweet tweet={tweet} index={index} deleteTweet={deleteTweet} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ListTweets;
