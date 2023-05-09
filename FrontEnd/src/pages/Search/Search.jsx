import "../Search/Search.css";
import Footer from "../../comps/Footer";

const Search = () => {
  return (
    <>
      <div className="searchContainer">
        <div className="topHeaderSearch">
          <span className="backHome"></span>
        </div>
        <div className="logoSearch">
          <img className="logo" src={require("../../images/logo.png")} alt="" />
          <span className="logoSpan">LYRO</span>
        </div>
        <div className="searhPart">
          <input type="text" id="search" />
          <div></div>
        </div>
        <div className="cates"></div>
      </div>
      <Footer />
    </>
  );
};

export default Search;
