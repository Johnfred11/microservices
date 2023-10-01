import Header from "./header";
import {AccountInformationTrabajador} from "./AccountInformation";
import { useState } from "react";
import { Link } from "react-router-dom";

function sideBar(content){
    
    return(
                <>
                <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuAvatar"
                    >
                    <li>
                        <a className="dropdown-item" href="#">Mi cuenta</a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">Cerrar Sesión</a>
                    </li>
                    </ul>
                     {/* sidebar profile*/}
                     <div>
                                <div className="card mb-4">
                                <div className="card-body text-center">
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class="rounded-circle mb-3" style={{width: 150+"px"}} alt="Avatar" />
                                <h5 class="mb-2"><strong>Trabajador Prueba</strong></h5>
                                <p class="text-muted">Trabajador <span class="badge bg-danger">inactivo</span></p>
                                    <p className="text-muted mb-4">Tecnico en construcción</p>
                                    <div className="d-flex justify-content-center mb-2">
                                    <button type="button" className="btn btn-primary">Editar</button>
                                    <button type="button" className="btn btn-outline-primary ms-1">Configuracion</button>
                                    </div>
                                </div>
                                </div>
                                <div className="card mb-4 mb-lg-0">
                                <div className="card-body p-0">
                                    <ul className="list-group list-group-flush rounded-3">
                                    <li className="list-group-item d-flex justify-content-start align-items-center p-3">
                                        <i class="fas fa-user-tie"></i>
                                        <a className="mx-5 mb-0 text-decoration-none" style={{cursor: "pointer"}} onClick={() => content(AccountInformationTrabajador)}>Informacion de la cuenta</a>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-start align-items-center p-3">
                                        <i class="fas fa-list-check"></i>
                                        <a className="mx-5 mb-0 text-decoration-none" style={{cursor: "pointer"}} onClick={() => content()}>Solicitudes</a>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-start align-items-center p-3">
                                    <i class="bi bi-plus-square-fill"></i>
                                        <Link to="/findServices" className="mx-5 mb-0 text-decoration-none" style={{cursor: "pointer"}}>Mis servicios</Link>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-start align-items-center p-3">
                                        <i class="fa-solid fa-circle-question"></i>
                                        <a className="mx-5 mb-0 text-decoration-none" style={{cursor: "pointer"}}>Centro de ayuda</a>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-start align-items-center p-3">
                                    <i class="fa-solid fa-bag-shopping"></i>
                                        <a className="mx-5 mb-0 text-decoration-none" style={{cursor: "pointer"}} onClick={() => content()}>Empleos</a>
                                    </li>            
                                    <li className="list-group-item d-flex justify-content-start align-items-center p-3">
                                        <i class="fas fa-credit-card"></i>
                                        <a className="mx-5 mb-0 text-decoration-none" style={{cursor: "pointer"}} onClick={() => content()}>Mis ganancias</a>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                        </div>
                </>
            )
}
export default function PerfilTrabajador(){

    const [contentAccount, setContentAccount] = useState(AccountInformationTrabajador);
    return(
        <>

        <section style={{backgroundColor: "#eee"}} className="pb-5">
            <Header />
            {/* <!-- Navbar --> */}
            <div className="container d-flex py-5">
            {/* <!-- Navbar --> */}
                
                <div>
                    {/* sidebar profile*/}
                    {sideBar(setContentAccount)}
                    {/* sidebar profile*/}
                </div>
                <div className='w-100 ms-4'>
                    {/* Account Information*/}
                    {contentAccount}
                </div>
                
            </div>
        </section>
        </>
    );

}