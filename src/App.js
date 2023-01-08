import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Overview from "./design-system/component/Overview";

function App() {
  return (
    <div className="App">
      <p>Welcome In CRM Application</p>
      <Overview
        icon={faTwitter}
        title="CRM"
        description="Customer Relation Managements"
        by=""
        Ahmed
      />
      <Overview
        icon={faFacebook}
        title="CMS"
        description="Content Management System"
        by=""
        Ahmed
      />
      <Overview
        icon={faInstagram}
        title="UMIS"
        description="University Management Information System"
        by=""
        Ahmed
      />
    </div>
  );
}

export default App;
