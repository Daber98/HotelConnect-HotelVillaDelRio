import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/autenticacion/login.js";
import SignUp from "./components/autenticacion/signup.js";
import Profile from "./components/profile";
import Habitacion from "./components/home/habitacion.js";
import Informacion from "./components/home/Informacion.js";
import Inicio from "./components/home/Inicio.js";
import Logout from "./components/home/signup.js";
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
              <Route path="/logout" element={<Logout />} />
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
