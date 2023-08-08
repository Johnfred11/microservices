import React, { useState } from 'react';



function ShowServices(){
    return(
        <>
           <div className="card h-auto">
            <div className="card-body">
                <h5 className="card-title">Título de la tarjeta</h5>
                <h6 className="card-subtitle mb-2 text-muted">Subtítulo de la tarjeta</h6>
                <p className="card-text">Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p>
                <a href="#" className="card-link">Enlace de tarjeta</a>
                <a href="#" className="card-link">Otro enlace</a>
            </div>
            </div> 
        </>
    )
}

export default function orders(){
    return(
        <>
            <h2 className='text-center'>Historial de servicios</h2>
            <ul className='d-flex list-group flex-row'>
                <li className='list-group-item me-4 text-decoration-none active'>En curso</li>
                <li className='list-group-item ms-4 text-decoration-none'>Finalizadas</li>
            </ul>
            <div className='d-flex row mt-0'>
                <ShowServices />
                <ShowServices />
            </div>
            
        </>
    )
}

