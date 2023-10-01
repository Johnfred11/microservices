import React, { useState } from 'react';

import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function ShowServices(){
    return(
        <>
            <tr>
                <td>
                    <div className='d-flex align-items-center'>
                    
                    <div className='ms-3'>
                        <p className='fw-bold mb-1'>Servicios Generales</p>
                        <p className='text-muted mb-0'>Empresarial</p>
                    </div>
                    </div>
                </td>
                <td>
                    <p className='fw-normal mb-1'>Ana Merlano</p>
                    <p className='text-muted mb-0'>Tecnico en limpieza de superficies</p>
                </td>
                <td>
                    <MDBBadge color='success' pill>
                    Activo
                    </MDBBadge>
                </td>
                <td>1'800.000</td>
                <td>
                    <MDBBtn color='link' rounded size='sm'>
                    Ver detalles
                    </MDBBtn>
                </td>
            </tr>
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
            <MDBTable align='middle'>
                <MDBTableHead>
                    <tr>
                    <th scope='col'>Servicio</th>
                    <th scope='col'>Tecnic@</th>
                    <th scope='col'>Estado</th>
                    <th scope='col'>Costo</th>
                    <th scope='col'>Actions</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <ShowServices />
                    <ShowServices />
                </MDBTableBody>
            </MDBTable> 
        </>
    )
}

