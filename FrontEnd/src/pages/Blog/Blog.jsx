import { useEffect, useState, useRef } from "react";

import { useParams } from "react-router-dom";
import { instance } from "../../App";
import { Button } from "@mui/material";
import Header from "../../comps/Header";
const Blog = () => {
  const [data, setData] = useState();
  const [userData, setUserData] = useState();
  const [rate, setRate] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const rateRef = useRef();
  const getData = async () => {
    setIsLoading(true);
    const res = await instance.get(`/blogs/${id}`);
    const res2 = await instance.get(`/users/${res.data.data.user_id}`);
    setRate(Number(res.data.data.stars) / Number(res.data.data.user));
    setUserData(res2.data.data);
    setData(res.data.data);
  };
  const Rate = async (id) => {
    const res = await instance.get(`/blogs/${id}`);
    await instance.post(`/blogs/review/${id}`, {
      star: rateRef.current.value,
    });
    setRate(Number(res.data.data.stars) / Number(res.data.data.user));
  };
  useEffect(() => {
    getData();
    setIsLoading(false);
  }, [data]);

  if (isLoading) {
    return <div>Unshij baina</div>;
  }
  return (
    <div>
      <Header />
      <div>
        <input ref={rateRef} />
        <Button onClick={() => Rate(data._id)}>Rate here</Button>
        <p> Rate : {rate}</p>
        <p> Hiisen hunii email : {userData?.email}</p>
        <p> Category : {data?.category}</p>
        <p>Description : {data?.desc}</p>
        <p>Uls : {data?.parentCategory}</p>
        <p>Aimag : {data?.category}</p>
        <p>Gol us gazar shoroo : {data?.secondCategory}</p>
        <p> Status(kinda useless) : {data?.status}</p>
        <img style={{ width: "20vw" }} src={data?.image} alt="" />
      </div>
    </div>
  );
};
export default Blog;