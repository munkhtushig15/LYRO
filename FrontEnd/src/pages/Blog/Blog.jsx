import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../App";
import { Button } from "@mui/material";
import Header from "../../comps/Header";
const Blog = () => {
  const [data, setData] = useState();
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const getData = async () => {
    setIsLoading(true);
    const res = await instance.get(`/blogs/${id}`);
    const res2 = await instance.get(`/users/${res.data.data.user_id}`);
    setUserData(res2.data.data);
    setData(res.data.data);
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
        <p>{userData?.email}</p>
        <p>{data?.category}</p>
        <p>{data?.desc}</p>
        <p>{data?.parentCategory}</p>
        <p>{data?.category}</p>
        <p>{data?.secondCategory}</p>
        <p>{data?.status}</p>
        <img style={{ width: "20vw" }} src={data?.image} alt="" />
      </div>
    </div>
  );
};
export default Blog;
