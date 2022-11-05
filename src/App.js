import logo from './logo.svg';
import './App.css';
import React from "react";
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Irina from './components/Irina'
import Pavel from './components/Pavel'
import Ksenia from './components/Ksenia'
import Karina from './components/Karina'
import Igor from './components/Igor'
import Elena from './components/Elena'


function App() {
  return (
    <div className="App">
      <h1>Командная работа (многостраничный сайт React)</h1>
      <Router>
        <div>
          <nav>
            <ul className='navbar'>
              <li>
                <Link to="/irina">Irina</Link>
              </li>
              <li>
                <Link to="/pavel">Pavel</Link>
              </li>
              <li>
                <Link to="/ksenia">Ksenia</Link>
              </li>
              <li>
                <Link to="/karina">Karina</Link>
              </li>
              <li>
                <Link to="/igor">Igor</Link>
              </li>
              <li>
                <Link to="/elena">Elena</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Routes>

            <Route path="/irina" element={<Irina />} />
            <Route path="/pavel" element={<Pavel />} />
            <Route path="/ksenia" element={<Ksenia />} />
            <Route path="/karina" element={<Karina />} />
            <Route path="/igor" element={<Igor />} />
            <Route path="/elena" element={<Elena />} />

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
