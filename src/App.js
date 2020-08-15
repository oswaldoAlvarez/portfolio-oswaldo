import React, { useState, useEffect } from "react";
import { Container, Snackbar, IconButton, Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Header from "./components/tweet-simulator/header/Header";
import SendTweet from "./components/tweet-simulator/sendTweet/SendTweet";
import { TWEETS_STORAGE } from "../src/utils/constants";
import ListTweets from "../src/components/tweet-simulator/listTweets/ListTweets";

import "./App.css";

function App() {
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

  useEffect(() => {
    const allTweetsStorage = localStorage.getItem(TWEETS_STORAGE);
    const allTweetsArray = JSON.parse(allTweetsStorage);
    setAllTweets(allTweetsArray);
    setReloadTweets(false);
  }, [reloadTweets]);

  const deleteTweet = (index) => {
    allTweets.splice(index, 1);
    setAllTweets(allTweets);
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
    setReloadTweets(true);
  };

  return (
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
  );
}

export default App;
