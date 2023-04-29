import "../../App.css";
import Mongolia from "./Mongolia";

const MongoliaC = () => {
  return (
    <div className="blogsBigContainer">
      <div className="blogTitle">
        <div className="titleCombine">
          <i className="gg-shape-circle countriesTitle"></i>
          <span className="countriesTitle">Mongolia</span>
        </div>
        <div className="blogsContainer">
          <div className="blogsContainer">
            <Mongolia />
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
export default MongoliaC;
