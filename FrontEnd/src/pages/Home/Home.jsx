import "./Home.css";
import Header from "../../comps/Header";
import Footer from "../../comps/Footer";
import BigAds from "../../comps/BigAds";
import CountryC from "../../comps/16 countries/ACountryC";

const Home = () => {
  return (
    <div className="homeContainer">
      <Header />
      <main>
        <BigAds />
        <div className="contents">
          <p className="title">LATEST ISSUE</p>
          <div className="gridBigBlog">
            <CountryC />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
