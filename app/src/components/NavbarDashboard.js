import React from "react";
import { fetchToken } from './Auth.js';
import logo from '../image/Logo.jpg';

const NavbarDashboard = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="./profile">
                    <img src={logo} alt="Hotel Villa del Rio" style={{ height: '30px', marginRight: '10px' }} />
                    Hotel Villa del Rio
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="./habitaciones">Habitaciones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./reservaciones">Reservacion</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <a className="btn btn-outline-light" href="/Logout">Cerrar Sesion</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavbarDashboard;
