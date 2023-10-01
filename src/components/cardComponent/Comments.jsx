import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

export default function Comments({ createComment }) {
  const [value, setValue] = useState("");
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setValue("");
    createComment(value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { width: 220 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <Box>
        <TextField
          id="outlined-textarea"
          label="Comment"
          multiline
          rows={4}
          placeholder="Your Comment"
          value={value}
          onChange={handleOnChange}
        />
        <Button
          sx={{ width: 220, mt: 1, mb: 5 }}
          variant="contained"
          color="success"
          endIcon={<SendIcon />}
          onClick={handleClick}
        ></Button>
      </Box>
    </Box>
  );
}
