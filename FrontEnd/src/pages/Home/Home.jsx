import "./Home.css";
import Header from "../../comps/Header";
import BigAds from "../../comps/BigAds";

const Home = () => {
  return (
    <div className="homeContainer">
      <Header />
      <main>
        <BigAds />
        <div className="contents">
          <p className="title">LATEST ISSUE</p>
          
        </div>
      </main>
    </div>
  );
};

export default Home;
