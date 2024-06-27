import "./App.css";
// import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./components/Navbar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <div>
        <Navbar />
        {/* <DaisyNav /> */}
        <PriceOptions />
      </div>
    </>
  );
}

export default App;
