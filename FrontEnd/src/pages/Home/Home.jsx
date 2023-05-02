import "./Home.css";
import Header from "../../comps/Header";
import Footer from "../../comps/Footer";
import BigAds from "../../comps/BigAds";
import MongoliaC from "../../comps/16 countries/MongoliaCont";
import BrazilC from "../../comps/16 countries/BrazilCont";
import ChinaC from "../../comps/16 countries/ChinaCont";
import Comments from "../../comps/Comments";

const Home = () => {
  return (
    <div className="homeContainer">
      <Header />
      <main>
        <BigAds />
        <div className="contents">
          <p className="title">LATEST ISSUE</p>
          <div className="gridBigBlog">
            <MongoliaC />
            <BrazilC />
            <ChinaC />
          </div>
        </div>
        <Comments />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
