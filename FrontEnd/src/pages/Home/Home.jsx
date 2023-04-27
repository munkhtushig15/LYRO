import "./Home.css";
import Header from "../../comps/Header";
import Footer from "../../comps/Footer";
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
              <Blogs />
              <div className="partOf">
                <span>Visit</span>
                <i className="gg-arrow-right-o"></i>
              </div>
            </div>
          </div>
        </div>
        <Comments />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
