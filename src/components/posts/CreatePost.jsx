import { Box, Button, CircularProgress, Container } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import MEditor from "src/lib/MEditor";
import { useState } from "react";
import axiosClient from "src/helpers/axiosClient";
import { useNavigate } from "react-router-dom";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { MImageUpload, MTextField } from "src/lib";
import { useSnackbar } from "notistack";

const CreatePost = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [postData, setPostData] = useState();
  const [loading, setLoading] = useState(false);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const postId = urlParams.get("id");

  useEffect(() => {
    if (postId) {
      setLoading(true);

      axiosClient
        .get(`/posts/get/post?postId=${postId}`)
        .then((results) => {
          if (results?.status === 200) {
            setPostData(results.data?.data);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [postId]);

  let formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: postData?.title || "",
      message: postData?.message || "",
      file: postData?.file || "",
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().trim().nullable(true).required(),
      message: Yup.string().trim().nullable(true).required(),
      file: Yup.string().trim().nullable(true).required(),
    }),
    onSubmit: (values) => {
      if (postId) {
        setLoading(true);
        axiosClient
          .put("/posts/update/post", { ...values, _id: postId })
          .then(async (res) => {
            if (res.status === 200) {
              enqueueSnackbar("Post updated", { variant: "success" });
              navigate("/app");
            }
          })
          .catch((error) => {
            console.log("gggg", error?.response?.data?.message);
          })
          .finally(() => {
            setLoading(!true);
          });
      } else {
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
      }
    },
  });

  console.log(formik.values);

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

                <MImageUpload
                  label="Image"
                  name="file"
                  accept="image/*"
                  loading={loading}
                  setLoading={setLoading}
                />

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
