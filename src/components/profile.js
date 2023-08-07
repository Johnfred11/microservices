import {Link, Routes, BrowserRouter} from 'react-router-dom';
import React, { useState } from 'react';

import AccountInformation from './AccountInformation';
import orders from './services';




function Profile(){

    const [contentAccount, setContentAccount] = useState(AccountInformation);

    return(
        <>

        <section style={{backgroundColor: "#eee"}} className="pb-5">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <!-- Container wrapper --> */}
            <div className="container-fluid ">
                {/* <!-- Toggle button --> */}
                <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <i className="fas fa-bars"></i>
                </button>

                {/* <!-- Collapsible wrapper --> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/* <!-- Navbar brand --> */}
                <a className="navbar-brand mt-2 mt-lg-0" href="#">
                    MicroServices
                </a>
                {/* <!-- Left links --> */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-12">
                    <li className="nav-item me-3">
                    <a className="nav-link col-">Calle 12 #45-67, Barrio El Prado</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link px-5">Servicios</a>
                    </li>
                </ul>
                
                {/* <!-- Left links --> */}
                </div>
                {/* <!-- Collapsible wrapper --> */}
                <div class="input-group rounded px-5 w-75">
                        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <span class="input-group-text border-0" id="search-addon">
                            <i class="fas fa-search"></i>
                        </span>
                    </div>
                
                {/* <!-- Right elements --> */}
                <div className="d-flex align-items-center">
                {/* <!-- Icon --> */}
                <a className="text-reset me-3" href="#">
                    <i className="fas fa-shopping-cart"></i>
                </a>

                {/* <!-- Notifications --> */}
                <div className="dropdown">
                    
                    <a
                    className="text-reset me-3 dropdown-toggle hidden-arrow"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                    >
                    <i className="fas fa-bell"></i>
                    <span className="badge rounded-pill badge-notification bg-danger">1</span>
                    </a>
                    <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                    >
                        
                    <li>
                        <a className="dropdown-item" href="#">Some news</a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">Another news</a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </li>
                    </ul>
                </div>
                {/* <!-- Avatar --> */}
                <div className="dropdown">
                    <a
                    className="dropdown-toggle d-flex align-items-center hidden-arrow"
                    href="#"
                    id="navbarDropdownMenuAvatar"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                    >
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        className="rounded-circle"
                        height="25"
                        alt="Black and White Portrait of a Man"
                        loading="lazy"
                    />
                    </a>
                    <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuAvatar"
                    >
                    <li>
                        <a className="dropdown-item" href="#">Mi cuenta</a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">Configuración</a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">Cerrar Sesión</a>
                    </li>
                    </ul>
                </div>
                </div>
                {/* <!-- Right elements --> */}
            </div>
            {/* <!-- Container wrapper --> */}
            </nav>
            {/* <!-- Navbar --> */}
            <div className="container d-flex py-5">
            {/* <!-- Navbar --> */}
                
                <div>
                    {/* sidebar profile*/}
                    <div>
                        <div className="card mb-4">
                        <div className="card-body text-center">
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class="rounded-circle mb-3" style={{width: 150+"px"}} alt="Avatar" />
                        <h5 class="mb-2"><strong>Usuario Prueba</strong></h5>
                        <p class="text-muted">Pymes <span class="badge bg-primary">Preferencial</span></p>
                            <p className="text-muted mb-4">Bucaramanga, Santander</p>
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
                                <a className="mx-5 mb-0 text-decoration-none" style={{cursor: "pointer"}} onClick={() => setContentAccount(AccountInformation)}>Informacion de la cuenta</a>
                            </li>
                            <li className="list-group-item d-flex justify-content-start align-items-center p-3">
                                <i class="fas fa-list-check"></i>
                                <a className="mx-5 mb-0 text-decoration-none" style={{cursor: "pointer"}} onClick={() => setContentAccount(orders)}>Historial Ordenes</a>
                            </li>
                            <li className="list-group-item d-flex justify-content-start align-items-center p-3">
                                <i class="fas fa-briefcase"></i>
                                <a className="mx-5 mb-0 text-decoration-none" style={{cursor: "pointer"}}>Ordenes Activas</a>
                            </li>
                            <li className="list-group-item d-flex justify-content-start align-items-center p-3">
                                <i class="fas fa-bell"></i>
                                <a className="mx-5 mb-0 text-decoration-none" style={{cursor: "pointer"}}>Notificaciones</a>
                            </li>
                                        
                            <li className="list-group-item d-flex justify-content-start align-items-center p-3">
                                <i class="fas fa-credit-card"></i>
                                <a className="mx-5 mb-0 text-decoration-none" style={{cursor: "pointer"}}>Medios de pago</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div> 
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

export default Profile;