import { useEffect, useState } from "react";
import Header from "../../comps/Header";
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
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Header />
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
