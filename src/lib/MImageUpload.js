/* eslint-disable no-useless-concat */
import { Box } from "@mui/material";
import axios from "axios";
import { useFormikContext } from "formik";
import { Fragment } from "react";

export default function MImageUpload({ name, setLoading, loading, ...others }) {
  const { setFieldValue, values } = useFormikContext();
  const setImageAction = async (event) => {
    setLoading(true);
    const file = await event.target.files[0];
    const formData = new FormData();
    await formData.append("image", file, file?.name);
    let headers = {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    };
    await axios
      .post(
        process.env.NODE_ENV !== "development"
          ? process.env.REACT_APP_BASE_URL + "/posts/imageupload"
          : "http://localhost:8088/api/v1/" + "/posts/imageupload",
        formData,
        headers
      )
      .then((response) => {
        if (response.status === 200 && response.data?.data) {
          setFieldValue(name, response.data?.data);
        }
      })
      .catch((err) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Fragment>
      <Box>
        <input
          type={"file"}
          accept="image/*"
          name={name}
          onChange={setImageAction}
        />
      </Box>
      {values[name] && (
        <Box
          component={"img"}
          src={values[name]}
          alt={name}
          width={"200px"}
          height={"200px"}
        ></Box>
      )}
    </Fragment>
  );
}
