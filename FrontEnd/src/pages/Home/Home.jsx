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
          <Blogs />
        </div>
      </main>
    </div>
  );
};

export default Home;
