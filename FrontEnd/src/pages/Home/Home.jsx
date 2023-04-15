import "./Home.css";
import Header from "../../comps/Header";
import BigAds from "../../comps/BigAds";
import Blogs from "../../comps/Blogs";
const Home = () => {
  return (
    <div className="homeContainer">
      <Header />
      <main>
        <BigAds />
        <div className="contents">
          <p className="title">LATEST ISSUE</p>
          <div className="blogsBigContainer">
            <div className="blogTitle">
              <div className="titleCombine">
                <i class="gg-shape-circle countriesTitle"></i>
                <span className="countriesTitle">Europe</span>
              </div>
              <Blogs />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
