import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreativeSpeakers from "./design-system/component/CreativeSpeakers";
import dataSpeaker from "./design-system/component/CreativeSpeakers/DataSpeaker";
import OurProgram from "./design-system/component/OurProgram";
import dataProgram from "./design-system/component/OurProgram/DataProgram";
import Overview from "./design-system/component/Overview";
import dataOverview from "./design-system/component/Overview/DataOverview";
import "./design-system/main.css";
import Home from "./page/home/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<Home />}/>
          </Routes>
      </BrowserRouter>
      <p>Welcome In CRM Application</p>
      <div style={{ display: "flex" }}>
        {dataSpeaker.map((item) => {
          return (
            <CreativeSpeakers
              key={item.id}
              companyname={item.companyname}
              nationality={item.nationality}
              alt={item.alt}
              img={item.img}
            />
          );
        })}
      </div>
      <div style={{ display: "flex" }}>
        {dataOverview.map((item) => {
          return (
            <Overview
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              by={item.by}
            />
          );
        })}
      </div>
      <div style={{ display: "flex" }}>
        {dataProgram.map((item) => {
          return (
            <OurProgram
              key={item.id}
              img={item.img}
              alt={item.alt}
              time={item.time}
              location={item.location}
              title={item.title}
              by={item.by}
              artical={item.artical}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
