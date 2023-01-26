import { Box, Button } from "@mui/material";
import { useFormikContext } from "formik";
import axiosClient from "src/helpers/axiosClient";
import PublishIcon from "@mui/icons-material/Publish";

export default function MImageUpload({ name, ...others }) {
  const { setFieldValue } = useFormikContext();
  const setImageAction = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file, file.name);

    const response = await axiosClient.post("/posts/imageupload", formData);

    if (response.status === 200 && response.data.data?.img) {
      setFieldValue(name, response.data.data?.img);
    }
    //  console.log("jjjjjj", response.data.data?.img);
  };

  return (
    <Box>
      <Button
        type="file"
        name="image"
        startIcon={<PublishIcon />}
        variant={"contained"}
        onClick={setImageAction}
      >
        Upload Image
      </Button>
    </Box>
  );
}
