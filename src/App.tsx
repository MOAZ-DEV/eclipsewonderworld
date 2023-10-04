import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { HomePage } from "./pages/HomePage.tsx";
import './App.scss'
import { EclipseTypesPage } from "./pages/EclipseTypesPage.tsx";
import { YouAreLost } from "./pages/YouAreLost.tsx";
import { EclipsesThroughoutHistory } from "./pages/EclipsesThroughoutHistory.tsx";

const App = () => {

  return <Outlet />;
}

export default App;

  //