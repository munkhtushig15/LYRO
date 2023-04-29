import { instance } from "../../App";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import MenuItem from "@mui/material/MenuItem";
import "react-toastify/dist/ReactToastify.css";
const CreatePost = () => {
  const titleRef = useRef();
  const imageRef = useRef();
  const descRef = useRef();
  const parentCategoryRef = useRef();
  const categoryRef = useRef();
  const secondCategoryRef = useRef();
  const Create = async () => {
    const res = await instance.post("/blogs/createBlog", {
      title: titleRef.current.value,
      image: imageRef.current.value,
      desc: descRef.current.value,
      parentCategory: parentCategoryRef.current.value,
      category: categoryRef.current.value,
      secondCategory: secondCategoryRef.current.value,
      user_id: JSON.parse(localStorage.getItem("user_id")),
    });
    toast.success("Created");
    console.log(res);
  };
  const secondCategoryOptions = [
    {
      value: "Mountain",
      label: "Mountain",
    },
    {
      value: "City",
      label: "City",
    },
    {
      value: "Beach",
      label: "Beach",
    },
    {
      value: "Forest",
      label: "Forest",
    },
    {
      value: "Land",
      label: "Land",
    },
  ];
  return (
    <div>
      <ToastContainer />
      <TextField inputRef={titleRef} label="Title"></TextField>
      <TextField inputRef={imageRef} label="Image"></TextField>
      <TextField inputRef={descRef} label="Description"></TextField>
      <TextField inputRef={parentCategoryRef} label="Country"></TextField>
      <TextField inputRef={categoryRef} label="Aimag"></TextField>
      <TextField
        select
        inputRef={secondCategoryRef}
        id="outlined-basic2"
        label="Gol us gazar shoroo"
        variant="standard"
      >
        {secondCategoryOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button onClick={Create} style={{ width: "150px", height: "57px" }}>
        Create
      </Button>
      <Link to="/Home">To Home</Link>
    </div>
  );
};
export default CreatePost;
