import * as React from "react";
import Box from "@mui/material/Box";
import * as Yup from "yup";
import { Button, Card, IconButton } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { MTextField } from "src/lib";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

export default function ProfileCard({ data }) {
  let formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      createdAt: data?.createdAt,
      email: data?.email,
      fullName: data?.fullName,
      updatedAt: data?.fullName,
      userName: data?.userName,
      about: data?.about,
      profile_image: data?.profile_image ?? "https://picsum.photos/536/354",
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string().trim().nullable(true).required(),
      userName: Yup.string().trim().nullable(true).required(),
      about: Yup.string().trim().nullable(true).required(),
      profile_image: Yup.string().trim().nullable(true).required(),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Card sx={{ width: "100%" }}>
      <Box
        sx={{
          marginY: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FormikProvider value={formik}>
          <Box
            component={"img"}
            src={formik.values?.profile_image}
            alt={formik.values?.userName}
            width={"200px"}
            height={"200px"}
          ></Box>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>

          <Form noValidate onSubmit={formik.handleSubmit}>
            <MTextField name={"userName"} label={"User Name"} />
            <MTextField name={"fullName"} label={"Full Name"} />
            <MTextField name={"about"} label={"About"} multiline minRows={4} />
            <Button
              variant={"contained"}
              type={"submit"}
              fullWidth
              sx={{ marginY: 2 }}
            >
              Submit
            </Button>
          </Form>
        </FormikProvider>
      </Box>
    </Card>
  );
}
