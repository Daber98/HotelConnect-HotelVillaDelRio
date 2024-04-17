import React from "react";
import { fetchToken } from './Auth.js';
import logo from '../image/Logo.jpg';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/inicio">
                    <img src={logo} alt="Hotel Villa del Rio" style={{ height: '30px', marginRight: '10px' }} />
                    Hotel Villa del Rio
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/inicio">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/habitacion">Habitaciones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Informacion">Informacion</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                                    <a className="btn btn-outline-primary" href="/SignUp">Registrarse</a>
                        
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
