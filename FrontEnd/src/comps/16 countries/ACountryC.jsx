import "../../App.css";
import Switzerland from "./Switzerland";
import Germany from "./Germany";
import Canada from "./Canada";
import UnitedStates from "./UnitedStates";
import Australia from "./Australia";
import Japan from "./Japan";
import UnitedKingdom from "./UnitedKingdom";
import France from "./France";
import Denmark from "./Denmark";
import NewZealand from "./NewZealand";
import TheNetherLands from "./TheNetherLands";
import Norway from "./Norway";
import Italy from "./Italy";
import Finland from "./Finland";
import Spain from "./Spain";
import China from "./China";
import Russia from "./Russia";
import Mongolia from "./Mongolia";
const data = [
  { country: <Switzerland />, title: "Switzerland" },
  {
    country: <Germany />,
    title: "Germany",
  },
  {
    country: <Canada />,
    title: "Canada",
  },
  {
    country: <UnitedStates />,
    title: "UnitedStates",
  },
  {
    country: <Australia />,
    title: "Australia",
  },
  {
    country: <Japan />,
    title: "Japan",
  },
  {
    country: <UnitedKingdom />,
    title: "UnitedKingdom",
  },
  {
    country: <France />,
    title: "France",
  },
  {
    country: <Denmark />,
    title: "Denmark",
  },
  {
    country: <NewZealand />,
    title: "NewZealand",
  },
  {
    country: <TheNetherLands />,
    title: "TheNetherLands",
  },
  {
    country: <Norway />,
    title: "Norway",
  },
  {
    country: <Italy />,
    title: "Italy",
  },
  {
    country: <Finland />,
    title: "Finland",
  },
  {
    country: <Spain />,
    title: "Spain",
  },
  {
    country: <China />,
    title: "China",
  },
  {
    country: <Russia />,
    title: "Russia",
  },
  {
    country: <Mongolia />,
    title: "Mongolia",
  },
];
const CountryC = () => {
  return (
    <>
      {data.map((el) => {
        return (
          <div className="blogsBigContainer">
            <div className="blogTitle">
              <div className="titleCombine">
                <i className="gg-shape-circle countriesTitle"></i>
                <span className="countriesTitle">{el.title}</span>
              </div>
              <div className="blogsContainer">
                <div className="blogsContainer">{el.country}</div>
              </div>
              <div className="partOf">
                <span>Visit</span>
                <i className="gg-arrow-right-o"></i>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default CountryC;
