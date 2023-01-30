import { Box, Button, TextField } from "@mui/material";
import React, { Fragment } from "react";
import { Configuration, OpenAIApi } from "openai";
import { useSelector } from "react-redux";
import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";

const Translation = () => {
  const { selectedOption } = useSelector((state) => state.user);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const doStuff = async () => {
    setLoading(true);
    let object = { ...selectedOption, prompt: input };

    const response = await openai.createCompletion(object);

    setResult(response.data.choices[0].text);
    setLoading(false);
    //   console.log(response.data.choices[0].text);
  };
  return (
    <Fragment>
      <TextField
        margin="dense"
        label={"text here"}
        variant={"outlined"}
        multiline
        minRows={5}
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{ marginY: 1 }}
      />
      {loading ? (
        <LoadingButton loading variant="contained" fullWidth>
          Submit
        </LoadingButton>
      ) : (
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={() => doStuff()}
        >
          Submit
        </Button>
      )}
      {result && <Box sx={{ marginY: 2 }}>{result}</Box>}
    </Fragment>
  );
};

export default Translation;
