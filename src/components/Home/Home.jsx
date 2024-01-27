import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import GiphyResults from "../GiphyResults/GiphyResults";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Home() {
  // setup local state
  const [userInput, setUserInput] = useState("");
  // initializing dispatch - to communicate with store
  const dispatch = useDispatch();
  // declaring usHistory to initialize history array
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: "FETCH_GIFS", payload: "Welcome" });
  }, []);

  function onClick(event) {
    dispatch({ type: "FETCH_GIFS", payload: userInput });
    setUserInput("");
  }

  return (
    <div>
      <Box
        sx={{
          maxWidth: "100%",
        }}
      >
        <TextField
          value={userInput}
          onChange={(event) => {
            console.log(event.target.value);
            // setting the local state to what the user is inputting
            setUserInput(event.target.value);
          }}
          fullWidth
          id="fullWidth"
        />
      </Box>
      <p>
        {/* render the value of userInput */}
        {userInput}
      </p>
      <Stack spacing={2} direction="row">
        {/* button will reset the DOM and submit data */}
        <Button
          onClick={() => {
            onClick();
          }}
          variant="contained"
        >
          submit
        </Button>
        {/* button will navigate to FavoriteView */}
        <Button
          onClick={() => {
            history.push("/FavoriteView");
          }}
          variant="contained"
        >
          Favorites
        </Button>
      </Stack>
      <div>
        <GiphyResults />
      </div>
    </div>
  );
}
export default Home;
