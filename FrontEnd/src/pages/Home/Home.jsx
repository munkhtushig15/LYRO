import "./Home.css";
import Header from "../../comps/Header";
import Footer from "../../comps/Footer"
import BigAds from "../../comps/BigAds";
import Blogs from "../../comps/Blogs";
import Comments from "../../comps/Comments";

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
                <span className="countriesTitle">Cities</span>
              </div>
              <Blogs />
              <div className="partOf">
                <span>Visit</span>
                <i class="gg-arrow-right-o"></i>
              </div>
            </div>
          </div>
        </div>
        <Comments />
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
