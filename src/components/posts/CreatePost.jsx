import { Box, Button, CircularProgress, Container } from "@mui/material";
import React, { Fragment } from "react";
import MEditor from "src/lib/MEditor";
import { useState } from "react";
import axiosClient from "src/helpers/axiosClient";
import { useNavigate } from "react-router-dom";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { MImageUpload, MTextField } from "src/lib";
import { useSnackbar } from "notistack";

const CreatePost = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  let formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: "",
      message: "",
      file: "http://res.cloudinary.com/dwubleiau/image/upload/v1674550768/gkqnv0j7yd45tpexvokc.jpg",
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().trim().nullable(true).required(),
      message: Yup.string().trim().nullable(true).required(),
      file: Yup.string().trim().nullable(true).required(),
    }),
    onSubmit: (values) => {
      console.log(values);
      setLoading(true);
      axiosClient
        .post("/posts/create", values)
        .then(async (res) => {
          if (res.status === 201) {
            enqueueSnackbar("Post created", { variant: "success" });
            navigate("/app");
          }
        })
        .catch((error) => {
          console.log("gggg", error?.response?.data?.message);
        })
        .finally(() => {
          setLoading(!true);
        });
    },
  });
  return (
    <Fragment>
      <Container component="main" maxWidth="md">
        <Box component={"center"}>
          <FormikProvider value={formik}>
            {loading ? (
              <CircularProgress />
            ) : (
              <Box component="form" noValidate onSubmit={formik.handleSubmit}>
                <MTextField
                  label={"Title"}
                  name={"title"}
                  multiline
                  minRows={4}
                />

                <MImageUpload label="Image" name="file" accept="image/*" />

                <MEditor name={"message"} label={"Content"} />
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ my: 1 }}
                  fullWidth
                >
                  {"Submit"}
                </Button>
              </Box>
            )}
          </FormikProvider>
        </Box>
      </Container>
    </Fragment>
  );
};

export default CreatePost;
