import Header from "./header"
import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCardHeader,
  MDBRipple,
  MDBCardFooter,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBadge,
  MDBTable,
  MDBTableHead,
  MDBTableBody
} from 'mdb-react-ui-kit';

import { Link } from "react-router-dom";

export default function FindServices(){
    var [centredModal, setCentredModal] = useState(false);

    var toggleShow = () => {
        setCentredModal(!centredModal);
        console.log("funciona"+centredModal);
        setClassModalServicio("d-block");
        setModalTrabajadores("d-none");
        setModalFinalizarSolicitud("d-none");
    };
    var [classModalServicio, setClassModalServicio] = useState("d-block");
    var [classModalTrabajadores, setModalTrabajadores] = useState("d-none");
    var [classModalFinalizarSolicitud, setModalFinalizarSolicitud] = useState("d-none");
    var changeModal = (accion) => {
        
        if(accion == 1){
            setClassModalServicio("d-block");
            setModalTrabajadores("d-none");
            setModalFinalizarSolicitud("d-none");
        }if(accion==2){
            setClassModalServicio("d-none");
            setModalTrabajadores("d-block");
            setModalFinalizarSolicitud("d-none");
        }if(accion==3){
            setClassModalServicio("d-none");
            setModalTrabajadores("d-none");
            setModalFinalizarSolicitud("d-block");
        }
    };
    return(
        <>
            <Header />
            <div className="container-fluid px-5">
                <nav className="d-flex flex-row bg-primary py-2 align-items-center container-fluid rounded-2">                  
                        <span className="inline mx-4 align-self-start">Categorias: </span>
                        <ul className="list-inline my-1">
                            <li className="list-inline-item mx-3 fs-6">Electricidad domestica</li>
                            <li className="list-inline-item mx-3 fs-6">Plomería y acueducto</li>
                            <li className="list-inline-item mx-3 fs-6">Construcción</li>
                            <li className="list-inline-item mx-3 fs-6">Aseo y limpieza</li>
                            <li className="list-inline-item mx-3 fs-6">Complementarios</li>
                            <li className="list-inline-item mx-3 text-light">Populares</li>
                        </ul>  
                </nav>              
                <div >
                    <div className="d-flex justify-content-center mt-5 p-3">
                        <div className="outline col-2">
                            <nav>
                                <div className="accordion" >
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" >
                                            <button className="accordion-button" type="button" data-bs-toggle="collapsed" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">Categorias</button>
                                        </h3>
                                        <div  className="accordion-collapsed collapsed show">
                                            <div className="accordion-body">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                                    <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                                        Limpieza y aseo
                                                    </label> 
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                                    <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                                        Electricidad
                                                    </label> 
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                                    <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                                        Plomeria y acueducto
                                                    </label>
                                                </div>
                                                
                                                    
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="accordion-item" id="accordionPanelsStayOpenExample">
                                        <h3 className="accordion-header" id="panelsStayOpen-headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">Precio</button>
                                        </h3>
                                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                                    <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                                        $0 - $100.000
                                                    </label> 
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                                    <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                                        $100.000 - $200.000
                                                    </label> 
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                                    <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                                        $200.000 - $300.000
                                                    </label>
                                                </div>
                                                
                                                    
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item" id="accordionPanelsStayOpenExample">
                                        <h3 className="accordion-header" id="panelsStayOpen-headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">Ubicación</button>
                                        </h3>
                                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                                    <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                                        hasta 1 Km
                                                    </label> 
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                                    <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                                        hasta 2 Km
                                                    </label> 
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                                    <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                                        Menos de 1 Km
                                                    </label>
                                                </div>
                                                
                                                    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="col-10">
                            <div className="d-flex justify-content-end pe-4 col-3 ms-5 mb-3">
                                <div className="form-outline col-4">
                                    <select className="form-select form-select-sm">
                                        <option >Ordenar por:</option>
                                        <option >Nombre</option>
                                        <option >Precio: Ascendente</option>
                                        <option >Precio: Descendente</option>  
                                    </select>
                                    <span className="select-arrow"></span>
                                </div>
                            </div>
                            <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                            <MDBModalDialog centered  size="lg">
                            
                                <DetalleServicio/>
                                <MostrarTrabajadores/>
                                <SeleccionarFinalizarSolicitud/>
                            </MDBModalDialog>
                            </MDBModal>            
                            <div className="d-flex flex-wrap container-fluid justify-content-around">
                                <div className="col-5 mx-2 my-2">
                                    <MDBCard className="d-flex flex-row" > 
                                
                                        <div className="container-fluid  w-70">
                                        <MDBCardHeader>Electricidad</MDBCardHeader>
                                        <MDBCardBody>
                                            <MDBCardTitle  onClick={toggleShow} style={{cursor:"pointer"}}>Instalacion y/o Reparación</MDBCardTitle>
                                            <MDBCardText>Instalacion y/o reparacion de tomacorrientes, interruptores y breaks. Precio por unidad. Servicio tecnico por obra labor.</MDBCardText>   
                                        </MDBCardBody>
                                        <MDBCardFooter>
                                            <MDBCardText>$15000</MDBCardText>
                                        </MDBCardFooter>
                                        </div>
                                    </MDBCard>   
                                </div>
                                <div className="col-5 mx-2 my-2">
                                    <MDBCard className="d-flex flex-row" onClick={toggleShow}>
                                        
                                        <div className="container-fluid  w-70">
                                        <MDBCardHeader>Limpieza y aseo</MDBCardHeader>
                                        <MDBCardBody>
                                            <MDBCardTitle>Limpieza de superficies</MDBCardTitle>
                                            <MDBCardText>Servicio especializado de limpieza de superficies, valor estimado por metro cuadrado</MDBCardText>
                        
                                        </MDBCardBody>
                                        <MDBCardFooter>
                                            <MDBCardText>$5000</MDBCardText>
                                        </MDBCardFooter>
                                        </div>
                                    </MDBCard>   
                                </div>
                                <div className="col-5 mx-2 my-2">
                                    <MDBCard className="d-flex flex-row">
                                        
                                        <div className="container-fluid  w-70">
                                        <MDBCardHeader>Featured</MDBCardHeader>
                                        <MDBCardBody>
                                            <MDBCardTitle>Special title treatment</MDBCardTitle>
                                            <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
                                           
                                        </MDBCardBody>
                                        </div>
                                    </MDBCard>   
                                </div>
                                <div className="col-5 mx-2 my-2">
                                    <MDBCard className="d-flex flex-row" >
                                        
                                        <div className="container-fluid  w-70">
                                        <MDBCardHeader>Featured</MDBCardHeader>
                                        <MDBCardBody>
                                            <MDBCardTitle>Special title treatment</MDBCardTitle>
                                            <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
                                           
                                        </MDBCardBody>
                                        </div>
                                    </MDBCard>   
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    function DetalleServicio(){
        return(

                <MDBModalContent className={classModalServicio}>
                <MDBModalHeader>
                    
                    <MDBModalTitle>Electricidad</MDBModalTitle>
                          
                    <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                    <MDBCardText>Instalación y/o reparación</MDBCardText>
                    <MDBCardImage position='top' alt='...' src='https://cenacap.edu.co/wp-content/uploads/2021/12/electricidad-residencial.jpg' />  
                    <p className="p-3">
                    Instalacion y/o reparacion de tomacorrientes, interruptores y breaks. Precio por unidad. Servicio tecnico por obra labor.
                    </p>
                    <MDBCardText className="text-end me-3">$15.000</MDBCardText>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color='secondary' onClick={toggleShow}>
                        Cancelar
                    </MDBBtn>
                    <MDBBtn onClick={()=>changeModal(2)}>Solicitar</MDBBtn>
                </MDBModalFooter>
             </MDBModalContent>

        );
    }
    function MostrarTrabajadores(){
        return(

                <MDBModalContent scrollable className={classModalTrabajadores}>
                <MDBModalHeader>
                    
                    <MDBModalTitle>Seleccione al tecnico</MDBModalTitle>
                          
                    <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                    
                    <MDBTable align='middle'>
                    <MDBTableHead>
                        <tr>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Area u ocupación</th>
                        <th scope='col'>Perfil</th>
                        <th scope='col'>Actions</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                        <td>
                            <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>
                                <p className='text-muted mb-0'>john.doe@gmail.com</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <p className='fw-normal mb-1'>Tecnico en electricidad domestica</p>
                        </td>
                        <td>
                            <MDBBadge color='success' pill>
                            Ver
                            </MDBBadge>
                        </td>
                        <td>
                            <MDBBtn color='link' rounded size='sm' onClick={()=>changeModal(3)}>
                            Seleccionar
                            </MDBBtn>
                        </td>
                        </tr>
                        
                    </MDBTableBody>
                    </MDBTable>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color='secondary' onClick={toggleShow}>
                        Cancelar
                    </MDBBtn>
                    <MDBBtn onClick={()=>changeModal(1)}>Atras</MDBBtn>
                </MDBModalFooter>
                </MDBModalContent>
            
        
        );
    }
    function SeleccionarFinalizarSolicitud(){
        return(

                <MDBModalContent scrollable className={classModalFinalizarSolicitud}>
                <MDBModalHeader>
                    
                    <MDBModalTitle>Detalle de la solicitud</MDBModalTitle>
                          
                    <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                    
                    <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle>Servicio Seleccionado</MDBCardTitle>
                        <MDBCardText>
                            <MDBCardText>Instalación y/o reparación</MDBCardText>
                            <MDBCardImage position='top' alt='...' src='https://cenacap.edu.co/wp-content/uploads/2021/12/electricidad-residencial.jpg' />  
                            <p className="p-3">
                            Instalacion y/o reparacion de tomacorrientes, interruptores y breaks. Precio por unidad. Servicio tecnico por obra labor.
                            </p>
                            <MDBCardText className="text-end me-3">$15.000</MDBCardText>
                        </MDBCardText>
                        <MDBBtn>cambiar</MDBBtn>
                        <hr />
                        <MDBCardText>Tecnicó Seleccionado</MDBCardText>
                        <MDBModalHeader>
                </MDBModalHeader>
                    
                    <MDBTable align='middle'>
                    <MDBTableHead>
                        <tr>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Area u ocupación</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                        <td>
                            <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>
                                <p className='text-muted mb-0'>john.doe@gmail.com</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <p className='fw-normal mb-1'>Tecnico en electricidad domestica</p>
                        </td>
                        </tr>
                        
                    </MDBTableBody>
                    </MDBTable>
                    </MDBCardBody>
                    </MDBCard>
                </MDBModalBody>
                <MDBModalFooter>
                <Link to="/solicitud" className="mx-5 mb-0 text-decoration-none" style={{cursor: "pointer"}}>
                <MDBBtn onClick={()=>changeModal(2)}>Añadir al carrito</MDBBtn>
                    </Link>
                

                    <MDBBtn color='secondary' onClick={toggleShow}>
                        Cancelar
                    </MDBBtn>
                    <MDBBtn onClick={()=>changeModal(2)}>Atras</MDBBtn>
                </MDBModalFooter>
                </MDBModalContent>
            
        
        );
    }
}
