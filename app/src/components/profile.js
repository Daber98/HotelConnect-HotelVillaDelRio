import React from "react";
import { useNavigate } from "react-router-dom";
import NavbarDashboard from "./NavbarDashboard";
import fondo from "../image/fondo.jpg"; // Importa la imagen de fondo

const Profile = () => {
    const navigate = useNavigate();

    const signOut = () => {
        localStorage.removeItem('Token');
        navigate("/logout");
    }

    return (
        <div style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
            <NavbarDashboard />
            <div className="container" style={{ paddingTop: 60 }}>
                <div className="row">
                    <div style={{ minHeight: 800, marginTop: 20 }}>
                        <h1>Bienvenido</h1>
                        <p>Hola, te damos la bienvenida a Hotel Villa del Rio</p>
                        <div>
                            <button type='button' className="btn btn-success btn-lg" onClick={signOut}>Cerrar sesión</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
