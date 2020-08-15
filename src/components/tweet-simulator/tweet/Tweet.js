import React from "react";
import { Card, CardContent } from "@material-ui/core";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import moment from "moment";

import "../../../styles/tweet-simulator/tweet/tweet.scss";

function Tweet({ tweet, index, deleteTweet }) {
  return (
    <Card className="tweet">
      <CardContent>
        <div className="tweet__header">
          <h5>{tweet.name}</h5>
          <DeleteTwoToneIcon onClick={() => deleteTweet(index)} />
        </div>
        <p>{tweet.tweet}</p>
        <div className="tweet__date-add-tweet">
          {moment(tweet.time).format("DD/MM/YYYY HH:mm")}
        </div>
      </CardContent>
    </Card>
  );
}

export default Tweet;
