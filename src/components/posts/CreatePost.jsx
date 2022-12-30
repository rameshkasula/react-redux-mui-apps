import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
} from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import React, { Fragment, useState } from "react";
import { MTextField } from "src/lib";
import * as Yup from "yup";
import FileBase64 from "react-file-base64";

const CreatePost = () => {
  const [loading, setLoading] = useState(false);
  let postFormik = useFormik({
    initialValues: {
      title: "",
      message: "",
      tags: "",
      file: "",
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().nullable(true).trim().required("Title is required"),
      message: Yup.string()
        .nullable(true)
        .trim()
        .required("Message is required"),
      tags: Yup.string().nullable(true).trim().required("Tags is required"),
      file: Yup.string().nullable(true).trim().required("File is required"),
    }),
    onSubmit: (values) => {
      setLoading(true);
      console.log(values);
    },
  });
  return (
    <Fragment>
      <Box
        // bgcolor={"skyblue"}
        flex={1}
        p={1}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Box position={"fixed"}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              //   avatar={
              //     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              //       R
              //     </Avatar>
              //   }
              //   action={
              //     <IconButton aria-label="settings">
              //       <MoreVertIcon />
              //     </IconButton>
              //   }
              title="Create Post"
              // subheader="September 14, 2016"
            />
            <CardContent>
              <Box>
                <FormikProvider value={postFormik}>
                  <Form
                    noValidate
                    autoComplete="off"
                    onSubmit={postFormik.handleSubmit}
                  >
                    <MTextField name={"title"} label={"Title"} />
                    <MTextField name={"message"} label={"Message"} />
                    <MTextField name={"tags"} label={"Tags"} />
                    <FileBase64
                      multiple={false}
                      onDone={({ base64 }) => {
                        postFormik.setFieldValue("file", base64);
                        console.log("jjjjj", base64);
                      }}
                    />

                    <Button
                      type={"submit"}
                      variant={"contained"}
                      fullWidth
                      disabled={loading}
                      sx={{ my: 2 }}
                    >
                      {loading ? <CircularProgress /> : "Submit"}
                    </Button>
                  </Form>
                </FormikProvider>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Fragment>
  );
};

export default CreatePost;
