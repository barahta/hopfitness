import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClientPage from './pages/Main.js';
import Main from "./pages/Main.js";
import AllNews from "./pages/AllNews";
import Vakansii from "./pages/Vakansii";
import Contacts from "./pages/Contacts";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {observer} from "mobx-react-lite";
import Actives from "./pages/Actives";
import ZonesPage from "./pages/ZonesPage";
import ProgramsPage from "./pages/ProgramsPage";
import TrenersPage from "./pages/TrenersPage";
import CardPage from "./pages/CardPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import Widget from "./pages/Widget";
import Raspisanie from "./pages/Raspisanie";


function App() {
  return (
      <Router>
        <Routes>

            <Route path="/" element={<Main />} />
            <Route path="/zones" element={<ZonesPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/treners" element={<TrenersPage />} />
            <Route path="/cards" element={<CardPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/allnews" element={<AllNews />} />
            <Route path="/vakansii" element={<Vakansii />} />
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="/activegroup" element={<Actives />} />
            <Route path="/hope" element={<Widget />} />
            <Route path="/raspisanie" element={<Raspisanie />} />
        </Routes>
          <ToastContainer />
      </Router>
  );
}

export default observer(App)
