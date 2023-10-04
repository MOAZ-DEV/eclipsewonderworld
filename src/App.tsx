import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { PNL } from "./components/PNL";
import { Footer } from "./components/Footer";
import './App.scss'

const App = () => {
  return <>
    <NavBar />
    <Outlet />
    <PNL />
    <Footer />
  </>;
}

export default App;