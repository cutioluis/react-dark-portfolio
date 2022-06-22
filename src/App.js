import "./App.css";

import Mode from "./components/Mode/Mode";
import Header from "./components/Header/Header";
import { About } from "./components/About/About";
import { Bio } from "./components/Bio/Bio";
import { Footer } from "./components/Footer/Footer";
import { BioDetails } from "./components/BioDetails/BioDetails";

function App() {
  return (
    <>
      <Mode />
      <Header />
      <About />
      <Bio />
      <Footer />
    </>
  );
}

export default App;
