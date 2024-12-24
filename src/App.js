import { useDetails } from "./DetailsContext";

import "./index.css";

import Header from "./Components/Header";
import Progress from "./Components/Progress";
import Name from "./Components/Name";
import Contact from "./Components/Contact";
import Birth from "./Components/Birth";
import Submit from "./Components/Submit";
import Completed from "./Components/Completed";
import Footer from "./Components/Footer";

export default function App() {
  const { stage } = useDetails();

  return (
    <div className="app">
      <Header />

      <Progress />

      <div className="main">
        <main>
          {stage === 0 && <Name />}
          {stage === 1 && <Contact />}
          {stage === 2 && <Birth />}
          {stage === 3 && <Submit />}
          {stage === 4 && <Completed />}
        </main>

        <Footer />
      </div>
    </div>
  );
}
