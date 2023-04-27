import { useEffect, useState } from "react";
import { instance } from "../../App";
const Mountian = () => {
  const [data, setData] = useState();
  const getData = async () => {
    const res = await instance.post("/blogs/Scate", {
      secondCategory: "Mountain",
    });
    setData(
      res.data.data.map((el) => {
        return el;
      })
    );
    console.log(res);
  };
  useEffect(() => {
    getData();
  });
  return (
    <div>
      {data &&
        data.map((el) => {
          return (
            <div>
              {el.secondCategory}
              {el.title}
            </div>
          );
        })}
    </div>
  );
};
export default Mountian;
