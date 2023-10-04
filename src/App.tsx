import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage.tsx";
import './App.scss'
import { EclipseTypesPage } from "./pages/EclipseTypesPage.tsx";
import { YouAreLost } from "./pages/YouAreLost.tsx";
import { EclipsesThroughoutHistory } from "./pages/EclipsesThroughoutHistory.tsx";

const App = () => {

  return <BrowserRouter>

    <Routes>
<Route path="eclipsewonderworld">
 
 <></>
        <Route path="*" element={<YouAreLost />} />
        <Route index path="" element={<HomePage />} />
        <Route path="eclipse_types" element={<EclipseTypesPage />} />
        <Route path="eclipses_throughout_history" element={<EclipsesThroughoutHistory />} />
</Route>

    </Routes>

  </BrowserRouter>;
}

export default App;

  //