import {Link, Routes, BrowserRouter} from 'react-router-dom';
import React, { useState } from 'react';

function Profile(){

    return(
        <>

        <section style={{backgroundColor: "#eee"}}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <!-- Container wrapper --> */}
            <div className="container-fluid">Name
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
                    <img
                    src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                    height="15"
                    alt="MDB Logo"
                    loading="lazy"
                    />
                </a>
                {/* <!-- Left links --> */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" href="#">Dashboard</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Team</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Projects</a>
                    </li>
                </ul>
                {/* <!-- Left links --> */}
                </div>
                {/* <!-- Collapsible wrapper --> */}

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
                        <a className="dropdown-item" href="#">My profile</a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">Settings</a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">Logout</a>
                    </li>
                    </ul>
                </div>
                </div>
                {/* <!-- Right elements --> */}
            </div>
            {/* <!-- Container wrapper --> */}
            </nav>
            {/* <!-- Navbar --> */}
            <div className="container">
            {/* <!-- Navbar --> */}
                <div className="row">
                <div className="col-lg-4">
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
                            <p className="mx-5 mb-0">Informacion de la cuenta</p>
                        </li>
                        <li className="list-group-item d-flex justify-content-start align-items-center p-3">
                            <i class="fas fa-list-check"></i>
                            <p className="mx-5 mb-0">Historial Ordenes</p>
                        </li>
                        <li className="list-group-item d-flex justify-content-start align-items-center p-3">
                            <i class="fas fa-briefcase"></i>
                            <p className="mx-5 mb-0">Ordenes Activas</p>
                        </li>
                        <li className="list-group-item d-flex justify-content-start align-items-center p-3">
                            <i class="fas fa-bell"></i>
                            <p className="mx-5 mb-0">Notificaciones</p>
                        </li>
                        
                        <li className="list-group-item d-flex justify-content-start align-items-center p-3">
                        <i class="fas fa-credit-card"></i>
                            <p className="mx-5 mb-0">Medios de pago</p>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="card mb-4">
                    <div className="card-body">
                        <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Nombre Completo</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">Carlos Lopez</p>
                        </div>
                        </div>
                        <hr />
                        <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Correo Electronico</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">example@example.com</p>
                        </div>
                        </div>
                        <hr/>
                        <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Celular</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">(57) 322 4282 443</p>
                        </div>
                        </div>
                        <hr/>
                        <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Direccion</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">Calle 12 #45-67, Barrio El Prado</p>
                        </div>
                        </div>
                        <hr/>
                        <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Documento</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">123456789-0</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6">
                        <div className="card mb-4 mb-md-0">
                        <div className="card-body">
                            <p className="mb-4"><span className="text-primary font-italic me-1">Ordenes</span> En Curso
                            </p>
                            <p className="mb-1" style={{fontSize: .77+"rem"}}>Limpieza de Instalaciones</p>
                            <div className="progress rounded" style={{height: 5+"px"}}>
                            <div className="progress-bar" role="progressbar" style={{width: 80+"%"}} aria-valuenow="80"
                                aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="mt-4 mb-1" style={{fontSize: .77+"rem"}}>Mantenimiento Preventivo</p>
                            <div className="progress rounded" style={{height: 5+"px"}}>
                            <div className="progress-bar" role="progressbar" style={{width: 72+"%"}} aria-valuenow="72"
                                aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="mt-4 mb-1" style={{fontSize: .77+"rem"}}>Adecuacion Zonas Verdes</p>
                            <div className="progress rounded" style={{height: 5+"px"}}>
                            <div className="progress-bar" role="progressbar" style={{width: 89+"%"}} aria-valuenow="89"
                                aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card mb-4 mb-md-0">
                        <div className="card-body">
                            <p className="mb-4"><span className="text-primary font-italic me-1">Ordenes</span> Historial
                            </p>
                            <p className="mb-1" style={{fontSize: .77+"rem"}}>Satisfaccion del Cliente</p>
                            <div className="progress rounded" style={{height: 5+"px"}}>
                            <div className="progress-bar" role="progressbar" style={{width: 80+"%"}} aria-valuenow="80"
                                aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="mt-4 mb-1" style={{fontSize: .77+"rem"}}>Ordenes Ultimo Mes</p>
                            <div className="progress rounded" style={{height: 5+"px"}}>
                            <div className="progress-bar" role="progressbar" style={{width: 72+"%"}} aria-valuenow="72"
                                aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="mt-4 mb-1" style={{fontSize: .77+"rem"}}>Puntuación Usuario</p>
                            <div className="progress rounded" style={{height: 5+"px"}}>
                            <div className="progress-bar" role="progressbar" style={{width: 89+"%"}} aria-valuenow="89"
                                aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Profile;