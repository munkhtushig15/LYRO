import {instance } from "../../App"
import { TextField } from "@mui/material"
import { useRef } from "react"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CreatePost = () => {
     const titleRef = useRef()
     const imageRef = useRef()
     const descRef = useRef()
     const parentCategoryRef = useRef()
     const categoryRef = useRef()
     const secondCategoryRef = useRef()
const Create = async () => {
const res = await instance.post("/blogs/createBlog" , {
        
title :
titleRef.current.value,
image :
imageRef.current.value,
desc:
descRef.current.value,
parentCategory :
parentCategoryRef.current.value,
category :
categoryRef.current.value,
secondCategory:
secondCategoryRef.current.value,
user_id:
JSON.parse(localStorage.getItem("id"))

})
toast.success("Created")
console.log(res)
}
return (
    <div>
        <ToastContainer/>
        <TextField inputRef={titleRef} label="Title"></TextField>
        <TextField inputRef={imageRef} label="Image"></TextField>
        <TextField inputRef={descRef} label="Description"></TextField>
        <TextField inputRef={parentCategoryRef} label="Country"></TextField>
        <TextField inputRef={categoryRef} label="Aimag"></TextField>
        <TextField inputRef={secondCategoryRef} label="Gol Us Gazar Shoroo"></TextField>
        <button onClick={Create}>Create</button>
    </div>
)
}
export default CreatePost