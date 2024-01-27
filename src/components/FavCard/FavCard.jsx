import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import axios from "axios";
import { useState } from "react";


const FavCard = ({ gif, fetchFavorites }) => {
  const [category, setCategory] = useState("");
  const setCategories = (gifId, newCategoryId) => {
    setCategory(newCategoryId)
    axios
      .put(`/api/favorites/${gifId}`, { category_id: newCategoryId })
      .then((response) => {
        console.log(response.data);
        fetchFavorites();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  return (
    <div key={gif.id}>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          {/* {card} */}
          <img src={gif.url} alt={gif.title} />
          <Stack direction="column" spacing={10}>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id={`label-${gif.id}`}>Choose Category</InputLabel>
              <Select
                autoWidth
                label="category"
                value={category}
                onChange={(event) => setCategories(gif.id, event.target.value)}
              >
                <MenuItem value={1}>wild</MenuItem>
                <MenuItem value={2}>uproarious</MenuItem>
                <MenuItem value={3}>poignant</MenuItem>
                <MenuItem value={4}>felicitous</MenuItem>
                <MenuItem value={5}>whimsical</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Card>
      </Box>
    </div>
  );
};
export default FavCard;
