import React, { } from "react";
import {useNavigate} from "react-router-dom";
  
export default function Profile(){
    const navigate = useNavigate();
    const signOut = () => {
        localStorage.removeItem('Token')
        navigate("/login");
    }
    return(
      <div className="container" style={{paddingTop: 60}}>
        <div className="row">
            <div style = {{minHeight: 800, marginTop: 20 }}>
                <h1>Bienvenido</h1>
                <p>Hola, te damos la bienvenido a hotel Villa del Rio</p>
                <div>
                    <button type = 'button' className="btn btn-success btn-lg" onClick= {signOut}>Cerrar sesion</button>
                </div>
            </div>
        </div>  
      </div>
    )
}