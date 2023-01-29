/* eslint-disable no-useless-concat */
import { Box, IconButton } from "@mui/material";
// import axios from "axios";
import { useFormikContext } from "formik";
import { Fragment } from "react";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
// import { CloudinaryContext, Image } from "cloudinary-react";

export default function MProfileImageUpload({ name, setLoading }) {
  const { setFieldValue, values } = useFormikContext();

  const setImageAction = async (event) => {
    setLoading(true);
    const file = await event.target.files[0];
    const formData = new FormData();
    await formData.append("file", file, file?.name);
    await formData.append("upload_preset", "quhqblgp");
    // await formData.append("cloud_name", "dwubleiau");

    await fetch("https://api.cloudinary.com/v1_1/dwubleiau/image/upload", {
      method: "post",
      body: formData,
    })
      .then((resp) => resp.json())
      .then(async (data) => {
        //   console.log(data.url);
        await setFieldValue("profile_image", data?.url);
        // setValues({ ...values, profile_image: data?.url });
        // console.log(values);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(!true);
      });
  };

  //  console.log(values, values[name]);

  return (
    <Fragment>
      {values[name] && (
        <Box
          component={"img"}
          src={values[name]}
          alt={name}
          width={"200px"}
          height={"200px"}
        ></Box>
      )}
      <Box>
        {/* <CloudinaryContext cloudName="dwubleiau">
          <div>
            <Image publicId="sample" width="50" />
          </div>
          <Image publicId="sample" width="0.5" />
        </CloudinaryContext> */}
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input
            hidden
            type={"file"}
            accept="image/*"
            name={name}
            onChange={setImageAction}
          />
          <PhotoCamera />
        </IconButton>
      </Box>
    </Fragment>
  );
}
