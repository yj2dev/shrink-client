import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./layouts/Header";
import LeftNav from "./layouts/LeftNav";
import Footer from "./layouts/Footer";

import FavoritePage from "./pages/FavoritePage";
import QnAPage from "./pages/QnAPage";
import ReportPage from "./pages/ReportPage";
import AccountPage from "./pages/AccountPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="layout">
          <LeftNav />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/favorite" element={<FavoritePage />} />
            <Route path="/question" element={<QnAPage />} />
            <Route path="/report" element={<ReportPage />} />
          </Routes>
        </div>
        {/*<Footer />*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
