import "./App.css";

import Mode from "./components/Mode/Mode";
import Header from "./components/Header/Header";
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Mode />
      <Header />
      <About />
      <Footer />
    </>
  );
}

export default App;
