import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import Profile from "./components/profile";
import Habitacion from "./components/habitacion.js";
import Informacion from "./components/Informacion.js";
import Inicio from "./components/Inicio.js";
import {RequireToken} from './components/Auth.js'

function App() {
  return (
    <div className="app">
        <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/habitacion" element={<Habitacion />} />
              <Route path="/informacion" element={<Informacion />} />
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/profile"
                element={
                  <RequireToken>
                    <Profile />
                  </RequireToken>
                }
              />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
