import "../../App.css";
import { CountryData } from "../../pages/Data";
import { Link } from "react-router-dom";
const CountryC = () => {
  return (
    <>
      {CountryData.map((el) => {
        return (
          <div className="blogsBigContainer">
            <div className="blogTitle">
              <div className="titleCombine">
                <i className="gg-shape-circle countriesTitle"></i>
                <span className="countriesTitle">{el.title}</span>
              </div>
              <div className="blogsContainer">
                <div className="blogsContainer">{el.country}</div>
              </div>{" "}
              <Link
                to={el.title}
                style={{ color: "white", textDecoration: "none" }}
              >
                <div className="partOf">
                  <span>Visit</span>
                  <i className="gg-arrow-right-o"></i>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default CountryC;
