import React, { useState, useEffect } from "react";
import { Container, Snackbar, IconButton, Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Header from "./header/Header";
import SendTweet from "./sendTweet/SendTweet";
import { TWEETS_STORAGE } from "../../utils/tweet-simulator/constanst";
import ListTweets from "./listTweets/ListTweets";
import FooterProjects from "../FooterProjects";

import "../../styles/tweet-simulator/tweetSimulator.scss";

function TweetSimulator() {
  const [toastProps, setToastProps] = useState({
    open: false,
    text: null,
  });
  const [allTweets, setAllTweets] = useState([]);
  const [reloadTweets, setReloadTweets] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setToastProps(false);
  };

  function getAllTweets() {
    const allTweetsStorage = localStorage.getItem(TWEETS_STORAGE);
    const allTweetsArray = JSON.parse(allTweetsStorage);
    setAllTweets(allTweetsArray);
  }
  useEffect(() => {
    setReloadTweets(false);
  }, [reloadTweets]);

  const deleteTweet = (index) => {
    allTweets.splice(index, 1);
    setAllTweets(allTweets);
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
    setReloadTweets(true);
    getAllTweets();
  };

  return (
    <div className="TS-Container">
      <Container className="tweets-simulator" maxWidth={false}>
        <Header />
        <SendTweet setToastProps={setToastProps} allTweets={allTweets} />
        <ListTweets allTweets={allTweets} deleteTweet={deleteTweet} />
        <Snackbar
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={toastProps.open}
          message={<span id="message-id">{toastProps.text}</span>}
          autoHideDuration={4000}
          action={
            <>
              <Button color="secondary" size="small" onClick={handleClose}>
                Cerrar
              </Button>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
        />
      </Container>
      <FooterProjects />
    </div>
  );
}

export default TweetSimulator;
