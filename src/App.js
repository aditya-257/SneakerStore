import "./App.css";
import { NavBar } from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { Airforce } from "./Pages/Airforce";
import { Jordans } from "./Pages/Jordans";
import { Errorpage } from "./Pages/Errorpage";
import { Cartpage } from "./Pages/Cartpage";
import { Footerpage } from "./Pages/Footerpage";
import SingleItempage from "./Pages/SingleItempage";
import { Crater } from "./Pages/Crater";
import { Checkout } from "./Components/Checkout";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/airforce" element={<Airforce />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/jordans" element={<Jordans />} />
        <Route path="/crater" element={<Crater />} />
        <Route path="/cart" element={<Cartpage/>} />
        <Route path="/singleitem/:itemId" element={<SingleItempage/>} />
        <Route path="/*" element={<Errorpage />} />
      </Routes>
      <Footerpage/>
    </>
  );
}

export default App;
