import React from "react";
import { Link } from "react-router-dom";
import "../../styles/personaje.css";
var regex2="[a-zA-Z0-9]{5,}";

export const Login = (props) => {
    return (
        <div className="d-flex justify-content-center">
            <div className="container m-sm-3 m-md-5 p-3 p-md-5" style={{ minHeight: "400px" }}>
                <div className="p-2 pb-4" style={{color: "rgba(255, 255, 255, 0.61)", textShadow: "2px 2px 2px #050505"}}><h2>Ingresa a tu Cuenta</h2></div>
                <form>
                    <div className="mb-3 text-white">
                        <label for="exampleInputEmail1" className="form-label">Direccion de Correo</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">Nunca compartiremos tu correo. Debe tener formato valido</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label text-white">Clave</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" pattern={regex2} />
                        <div id="emailHelp" className="form-text">Minimo 5 carácteres. Letras y/o Numeros. Mayusuculas y/o Minusuculas.</div>
                    </div>
                    <div className="d-flex justify-content-center p-2">
                        <button type="submit" className="btn btn-warning">Ingresar</button>
                    </div>
                    <div className="form-text d-flex justify-content-center"><Link to="#" className="p-2">Crear Cuenta</Link><Link to="#" className="p-2">Recuperar Cuenta</Link></div>
                </form>
            </div>
        </div>
	);
};
