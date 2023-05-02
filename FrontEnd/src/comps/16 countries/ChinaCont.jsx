import "../../App.css";
import China from "./China";

const ChinaC = () => {
  return (
    <div className="blogsBigContainer">
      <div className="blogTitle">
        <div className="titleCombine">
        <i className="gg-shape-circle countriesTitle"></i>
          <span className="countriesTitle">China</span>
        </div>
        <div className="blogsContainer">
          <div className="blogsContainer">
            <China />
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
export default ChinaC;
