import { Box, Button, Card, CardContent, CardHeader } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import React, { Fragment } from "react";
import { MTextField } from "src/lib";
import * as Yup from "yup";
import FileBase64 from "react-file-base64";

const CreatePost = () => {
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
      console.log(values);
    },
  });
  return (
    <Fragment>
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
                {postFormik.values.file}
                <Button type={"submite"} variant={"contained"}>
                  Submit
                </Button>
              </Form>
            </FormikProvider>
          </Box>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default CreatePost;
