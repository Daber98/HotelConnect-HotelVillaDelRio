import { useState } from "react";
import Axios from "axios";
import villaImage from "../image/Villa.jpg";
import Navbar from './navbar'

const SignUp = () => {
    
    const [email, setEmail] = useState("");
    const [lastName, setLastName] = useState(""); // Cambiado a lastName
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");
 
    const register = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/register", {
          email: email,
          last_name: lastName, // Cambiado a last_name
          name: name,
          phone: phone,
          password: password,
        }).then((response) => {
          console.log(response);
          if(response.data.message){
            setRegisterStatus(response.data.message);
          }else{
            setRegisterStatus("CUENTA CREADA EXITOSAMENTE");
          }
        })
    }
 
    let imgs = [
      villaImage, // Usa la imagen Villa.jpg
    ];

    return (
      <div>
        <Navbar/>
        <div className="container" style={{ paddingTop: 60 }}>
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-7">
                <form>
                  <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p className="lead fw-normal mb-0 me-3">Crea tu cuenta</p>
                  </div>
                  <p><h1 style={{ fontSize: '15px', textAlign: 'center', marginTop: '20px' }}>{registerStatus}</h1></p>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Introduzca su nombre" required
                      onChange={(e) => { setName(e.target.value) }}
                    />
                    <label className="form-label">Nombre</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Introduzca su apellido" required
                      onChange={(e) => { setLastName(e.target.value) }} // Cambiado a setLastName
                    />
                    <label className="form-label">Apellido</label> {/* Agregado label para el apellido */}
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      onChange={(e) => { setEmail(e.target.value) }} placeholder="Ingrese su dirección de correo electrónico" required
                    />
                    <label className="form-label">Ingrese su correo electrónico</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Introduzca su número de teléfono" required
                      onChange={(e) => { setPhone(e.target.value) }} // Agregado para el número de teléfono
                    />
                    <label className="form-label">Número de Teléfono</label>
                  </div>
                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      onChange={(e) => { setPassword(e.target.value) }} placeholder="Ingresa tu contraseña" required
                    />
                    <label className="form-label">Contraseña</label>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input className="form-check-input me-2" type="checkbox" value="" />
                      <label className="form-check-label">
                        Recordar
                      </label>
                    </div>
                    <a href="#" className="text-body">¿Has olvidado tu contraseña?</a>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="button" className="btn btn-primary btn-lg" onClick={register}>Registrarse</button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Iniciar sesion <a href="login" className="link-danger">AQUI</a></p>
                  </div>

                </form>
              </div>
              <div className="col-md-5">
                <img src={imgs[0]} className="img-fluid" alt="Villa" style={{ width: '100%' }}/>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    );
};

export default SignUp;
