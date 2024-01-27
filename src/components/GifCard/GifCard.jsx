import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useDispatch } from "react-redux";
import { useState } from "react";

const GifCard = ({ gif }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const dispatch = useDispatch();

  const favButton = () => {
    if (isFavorited === false) {
      return (
        <Button
          onChange={() => setIsFavorited(true)}
          variant="outlined"
          onClick={handlePost}
        >
          FAVORITE
        </Button>
      );
    }
    return (
      <Button disabled variant="outlined">
        FAVORITE
      </Button>
    );
  };

  const handlePost = () => {
    setIsFavorited(true);
    dispatch({
      type: "POST_FAVORITE",
      payload: {
        title: gif.title,
        url: gif.images.original.webp,
      },
    });
  };

  const card = (
    <React.Fragment>
      <CardContent></CardContent>
      {/* display here */}
      <CardActions></CardActions>
    </React.Fragment>
  );
  
  return (
    <>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          {card}
          <Stack direction="row" spacing={2}>
            {isFavorited ? (
              <Button disabled variant="outlined">
                FAVORITE
              </Button>
            ) : (
              <Button variant="outlined" onClick={handlePost}>
                FAVORITE
              </Button>
            )}
          </Stack>
          <img key={gif.id} src={gif.images.original.webp} alt={gif.title} />
        </Card>
      </Box>
    </>
  );
};

export default GifCard;
