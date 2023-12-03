import {
  EditOutlined,
  DeleteOutlined,
  AttachFileOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Typography,
  InputBase,
  useTheme,
  Button,
  IconButton,
  useMediaQuery,
  Input,
} from "@mui/material";
import FlexBetween from "../../components/Buttons/flexBetween";
import Dropzone from "react-dropzone";
import ProfilePic from "../../components/profilePic/profilePic";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../store/store";
import { Card } from "@material-tailwind/react";
import axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const NewPost = ({ pictureName }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [Title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const { palette } = useTheme();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;

  const handlePost = async () => {
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("Title", Title);
    formData.append("postContent", post);
    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }

    if (pictureName) {
      formData.append("userPicturePath", pictureName);
    }

    const response = await fetch(`${backendUrl}/posts`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });

    const posts = await response.json();
    dispatch(setPosts({ posts }));
    setImage(null);
    setPost("");
    setTitle("");
  };

  return (
    <Card
      style={{
        padding: "1.5rem 1.5rem 0.75rem 1.5rem",
        backgroundColor: palette.background.alt,
        borderRadius: "0.75rem",
      }}
    >
      <div className="flex flex-row">
        <ProfilePic image={pictureName} size={"55px"} />
        <div className="flex w-full pl-5 gap-3">
          <Input
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={Title}
            sx={{
              width: "60%",
              backgroundColor: palette.neutral.light,
              borderRadius: "2rem",
              padding: "1rem 2rem",
            }}
            disableUnderline
          />
          <Input
            placeholder="Post Content"
            onChange={(e) => setPost(e.target.value)}
            value={post}
            sx={{
              width: "100%",
              backgroundColor: palette.neutral.light,
              borderRadius: "2rem",
              padding: "1rem 2rem",
            }}
            disableUnderline
          />
        </div>
      </div>

      {isImage && (
        <Box
          border={`1px solid ${medium}`}
          borderRadius="5px"
          mt="1rem"
          p="1rem"
        >
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <FlexBetween>
                <Box
                  {...getRootProps()}
                  border={`2px dashed ${palette.primary.main}`}
                  p="1rem"
                  width="100%"
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <input {...getInputProps()} />
                  {!image ? (
                    <p>Add Image Here</p>
                  ) : (
                    <FlexBetween>
                      <img
                        src={`${backendUrl}/assets/${image.name}`} // Use createObjectURL to display the image
                        alt={image.name}
                        style={{ maxWidth: "100%", maxHeight: "150px" }}
                      />

                      <Typography>{image.name}</Typography>
                      <EditOutlined />
                    </FlexBetween>
                  )}
                </Box>
                {image && (
                  <IconButton
                    onClick={() => setImage(null)}
                    sx={{ width: "15%" }}
                  >
                    <DeleteOutlined />
                  </IconButton>
                )}
              </FlexBetween>
            )}
          </Dropzone>
        </Box>
      )}

      <Divider sx={{ margin: "1.25rem 0" }} />

      <FlexBetween>
        <FlexBetween gap="0.25rem" onClick={() => setIsImage(!isImage)}>
          <ImageOutlined sx={{ color: mediumMain }} />
          <Typography
            color={mediumMain}
            sx={{ "&:hover": { cursor: "pointer", color: medium } }}
          >
            Image
          </Typography>
        </FlexBetween>

        <Button
          disabled={!post}
          onClick={handlePost}
          // cursor="pointer"
          sx={{
            color: palette.background.alt,
            backgroundColor: "rgb(220 38 38)",
            borderRadius: "3rem",
          }}
        >
          POST
        </Button>
      </FlexBetween>
    </Card>
  );
};

export default NewPost;
