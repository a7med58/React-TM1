import CreativeSpeakers from "./design-system/component/CreativeSpeakers";
import dataSpeaker from "./design-system/component/CreativeSpeakers/DataSpeaker";
import Overview from "./design-system/component/Overview";
import dataOverview from "./design-system/component/Overview/DataOverview";

function App() {
  return (
    <div className="App">
      <p>Welcome In CRM Application</p>
      <div style={{ display: "flex" }}>
        {dataSpeaker.map((item) => {
          return (
            <CreativeSpeakers
              key={item.id}
              companyname={item.companyname}
              nationality={item.nationality}
              alt={item.alt}
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
    </div>
  );
}

export default App;
