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



export default function FindServices(){
    var [centredModal, setCentredModal] = useState(false);

    var toggleShow = () => {
        setCentredModal(!centredModal);
        console.log("funciona"+centredModal);
    };
    var [classModalServicio, setClassModalServicio] = useState("d-block");
    var [classModalTrabajadores, setModalTrabajadores] = useState("d-none");
    var changeModal = (accion) => {
        
        if(accion == "cerrar"){
            setClassModalServicio("d-block");
            setModalTrabajadores("d-none");
        }if(accion=="abrir"){
            setClassModalServicio("d-none");
            setModalTrabajadores("d-block");
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
                            <div className="d-flex justify-content-end pe-4">
                                <div className="form-outline">
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
                            <MDBModalDialog centered scrollable size="lg">
                            
                                <DetalleServicio/>
                                <MostrarTrabajadores/>
                        
                            </MDBModalDialog>
                            </MDBModal>            
                            <div className="d-flex flex-wrap container-fluid justify-content-around">
                                <div className="col-5 mx-2 my-2">
                                    <MDBCard className="d-flex flex-row" > 
                                        <div className="container-fluid  w-30">
                                            <MDBCardImage position='top' alt='...' src='https://cenacap.edu.co/wp-content/uploads/2021/12/electricidad-residencial.jpg' />
                                        </div>
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
                                        <div className="container-fluid  w-30">
                                            <MDBCardImage position='top' alt='...' src='https://img.freepik.com/vector-premium/concepto-icono-servicio-limpieza-o-dibujos-animados-planos-mantenimiento-hogar-limpieza_101884-1503.jpg?w=2000' />
                                        </div>
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
                                        <div className="container-fluid  w-30">
                                            <MDBCardImage position='top' alt='...' src='https://mdbootstrap.com/img/new/standard/city/062.webp' />
                                        </div>
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
                                        <div className="container-fluid  w-30">
                                            <MDBCardImage position='top' alt='...' src='https://mdbootstrap.com/img/new/standard/city/062.webp' />
                                        </div>
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
                    <MDBBtn onClick={()=>changeModal("abrir")}>Solicitar</MDBBtn>
                </MDBModalFooter>
             </MDBModalContent>

        );
    }
    function MostrarTrabajadores(){
        return(

                <MDBModalContent className={classModalTrabajadores}>
                <MDBModalHeader>
                    
                    <MDBModalTitle>Electricidad</MDBModalTitle>
                          
                    <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                    
                    <MDBTable align='middle'>
                    <MDBTableHead>
                        <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Title</th>
                        <th scope='col'>Status</th>
                        <th scope='col'>Position</th>
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
                            <p className='fw-normal mb-1'>Software engineer</p>
                            <p className='text-muted mb-0'>IT department</p>
                        </td>
                        <td>
                            <MDBBadge color='success' pill>
                            Active
                            </MDBBadge>
                        </td>
                        <td>Senior</td>
                        <td>
                            <MDBBtn color='link' rounded size='sm'>
                            Edit
                            </MDBBtn>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>Alex Ray</p>
                                <p className='text-muted mb-0'>alex.ray@gmail.com</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <p className='fw-normal mb-1'>Consultant</p>
                            <p className='text-muted mb-0'>Finance</p>
                        </td>
                        <td>
                            <MDBBadge color='primary' pill>
                            Onboarding
                            </MDBBadge>
                        </td>
                        <td>Junior</td>
                        <td>
                            <MDBBtn color='link' rounded size='sm'>
                            Edit
                            </MDBBtn>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>Kate Hunington</p>
                                <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <p className='fw-normal mb-1'>Designer</p>
                            <p className='text-muted mb-0'>UI/UX</p>
                        </td>
                        <td>
                            <MDBBadge color='warning' pill>
                            Awaiting
                            </MDBBadge>
                        </td>
                        <td>Senior</td>
                        <td>
                            <MDBBtn color='link' rounded size='sm'>
                            Edit
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
                    <MDBBtn onClick={()=>changeModal("cerrar")}>Atras</MDBBtn>
                </MDBModalFooter>
                </MDBModalContent>
            
        
        );
    }
}
