import {Link, Routes, BrowserRouter} from 'react-router-dom';
import React, { useState } from 'react';

import Header from './header';
import NuevaSolicitud from './NuevaSolicitud';

export default function Solicitud(){
    const [contentAccount, setContentAccount] = useState(NuevaSolicitud);
    return(
        <>

        <section style={{backgroundColor: "#eee"}} className="pb-5">
            <Header />
            {/* <!-- Navbar --> */}
            <div className="container d-flex py-5">
            {/* <!-- Navbar --> */}
                
                <div>
                    {/* sidebar profile*/}
                    {sideBarSolicitud(setContentAccount)}
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

    function sideBarSolicitud(content){
        return(
            <div>

                <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">
                    <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-start align-items-center p-3">
                        <i class="fa-solid fa-circle-question"></i>
                        <a className="mx-5 mb-0 text-decoration-none" style={{cursor: "pointer"}}>Carrito de Compras</a>
                    </li>
                    <li className="list-group-item d-flex justify-content-start align-items-center p-3">
                        <i class="fas fa-user-tie"></i>
                        <a className="mx-5 mb-0 text-decoration-none" style={{cursor: "pointer"}} onClick={() => content()}>Mis Solicitudes</a>
                    </li>
                    <li className="list-group-item d-flex justify-content-start align-items-center p-3">
                        <i class="fas fa-list-check"></i>
                        <a className="mx-5 mb-0 text-decoration-none" style={{cursor: "pointer"}} onClick={() => content()}>Historial Solicitudes</a>
                    </li>
                    <li className="list-group-item d-flex justify-content-start align-items-center p-3">
                    <i class="bi bi-plus-square-fill"></i>
                        <Link to="/findServices" className="mx-5 mb-0 text-decoration-none" style={{cursor: "pointer"}}>Calificar Servicio</Link>
                    </li>
                    <li className="list-group-item d-flex justify-content-start align-items-center p-3">
                        <i class="fa-solid fa-circle-question"></i>
                        <a className="mx-5 mb-0 text-decoration-none" style={{cursor: "pointer"}}>Centro de ayuda</a>
                    </li>
                    </ul>
                </div>
                </div>
        </div>
        );
    }

}