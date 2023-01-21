import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./design-system/main.css";
import AboutUs from "./page/home/component/AboutUs";
import ContactForm from "./page/home/component/ContactUs/ContactUs";
import CreativeSpeakersComponent from "./page/home/component/CreativeSpeakers/CreativeSpeakersComponent";
import OurPrograms from "./page/home/component/OurPrograms";
import OverView from "./page/home/component/OverView";
import Home from "./page/home/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overView" element={<OverView />} />
          <Route path="/speakers" element={<CreativeSpeakersComponent />} />
          <Route path="/programs" element={<OurPrograms />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
