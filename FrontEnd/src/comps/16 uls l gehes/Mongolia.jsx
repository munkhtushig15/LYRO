import { useEffect, useState } from "react";
import { instance } from "../../App";

const Mongolia = () => {
  const [data, setData] = useState();
  const getData = async () => {
    const res = await instance.post("/blogs/Pcate", {
      parentCategory: "Mongolia",
    });
    setData(
      res.data.data.map((el) => {
        return el;
      })
    );
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>
        {data &&
          data.map((el) => {
            return (
              <div>
                <p>{el.parentCategory}</p>
                <p>{el.title}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Mongolia;
