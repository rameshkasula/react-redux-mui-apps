import { Box, Typography } from "@mui/material";
import { useFormikContext } from "formik";
import axiosClient from "src/helpers/axiosClient";

export default function MImageUpload({ name, ...others }) {
  const { setFieldValue } = useFormikContext();
  const setImageAction = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    const response = await axiosClient.post("/images/upload", formData);

    if (response.status === 200 && response.data.data?.img) {
      setFieldValue(name, response.data.data?.img);
    }
    console.log("jjjjjj", response.data.data?.img);
  };

  return (
    <Box>
      {/* <FileUpload
      multiFile={true}
      disabled={false}
      title="My awesome file uploader"
      header="[Drag to drop]"
      leftLabel="or"
      rightLabel="to select files"
      buttonLabel="click here"
      buttonRemoveLabel="Remove all"
      maxFileSize={10}
      maxUploadFiles={0}
      maxFilesContainerHeight={357}
      errorSizeMessage={"fill it or remove it to use the default error message"}
      allowedExtensions={["jpg", "jpeg", "png"]}
      onFilesChange={handleFilesChange}
      onError={handleFileUploadError}
      //  imageSrc={'path/to/custom/image'}
      bannerProps={{ elevation: 0, variant: "outlined" }}
      containerProps={{ elevation: 0, variant: "outlined" }}
      placeholderImageDimension={{
        xs: { width: 128, height: 128 },
        sm: { width: 128, height: 128 },
        md: { width: 164, height: 164 },
        lg: { width: 256, height: 256 },
      }}
    /> */}
      <Typography>image upload</Typography>
      <input type="file" name="image" onChange={setImageAction} />
    </Box>
  );
}
