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


function App() {
  return (
      <Router>
        <Routes>

            <Route path="/" element={<Main />} />
            <Route path="/allnews" element={<AllNews />} />
            <Route path="/vakansii" element={<Vakansii />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/activegroup" element={<Actives />} />
        </Routes>
          <ToastContainer />
      </Router>
  );
}

export default observer(App)
