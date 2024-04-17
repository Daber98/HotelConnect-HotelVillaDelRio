import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from '@mui/material';
import Navbar from './navbar'

import "../css/inicio.css"

const Inicio = () => {
    return (
        <div>
            <Navbar/>
            <div className="welcome-container">
                <Typography variant="h1" className="welcome-title">¡Bienvenido!</Typography>
                <Typography variant="body1" className="welcome-message">Descubre todo lo que tenemos para ofrecerte</Typography>
                <Button variant="contained" component={Link} to="/habitacion" className="welcome-button">Explora nuestras habitaciones</Button>
            </div>
        </div>
        
    );
}

export default Inicio;