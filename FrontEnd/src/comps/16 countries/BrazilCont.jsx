import "../../App.css";
import Brazil from "./Brazil";

const BrazilC = () => {
  return (
    <div className="blogsBigContainer">
      <div className="blogTitle">
        <div className="titleCombine">
          <i className="gg-shape-circle countriesTitle"></i>
          <span className="countriesTitle">Brazil</span>
        </div>
        <div className="blogsContainer">
          <div className="blogsContainer">
            <Brazil />
          </div>
        </div>
        <div className="partOf">
          <span>Visit</span>
          <i className="gg-arrow-right-o"></i>
        </div>
      </div>
    </div>
  );
};
export default BrazilC;
