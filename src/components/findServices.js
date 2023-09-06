import Header from "./header"
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCardHeader,
  MDBBtn,
  MDBRipple,
  MDBCardFooter
} from 'mdb-react-ui-kit';

export default function FindServices(){
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
                                                    <label className="form-check-label" for="flexCheckIndeterminate">
                                                        Limpieza y aseo
                                                    </label> 
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                                    <label className="form-check-label" for="flexCheckIndeterminate">
                                                        Electricidad
                                                    </label> 
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                                    <label className="form-check-label" for="flexCheckIndeterminate">
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
                                                    <label className="form-check-label" for="flexCheckIndeterminate">
                                                        $0 - $100.000
                                                    </label> 
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                                    <label className="form-check-label" for="flexCheckIndeterminate">
                                                        $100.000 - $200.000
                                                    </label> 
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                                    <label className="form-check-label" for="flexCheckIndeterminate">
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
                                                    <label className="form-check-label" for="flexCheckIndeterminate">
                                                        hasta 1 Km
                                                    </label> 
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                                    <label className="form-check-label" for="flexCheckIndeterminate">
                                                        hasta 2 Km
                                                    </label> 
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                                    <label className="form-check-label" for="flexCheckIndeterminate">
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
                            <div className="d-flex flex-wrap container-fluid justify-content-around">
                                <div className="col-5 mx-2 my-2">
                                    <MDBCard className="d-flex flex-row"> 
                                        <div className="container-fluid  w-30">
                                            <MDBCardImage position='top' alt='...' src='https://cenacap.edu.co/wp-content/uploads/2021/12/electricidad-residencial.jpg' />
                                        </div>
                                        <div className="container-fluid  w-70">
                                        <MDBCardHeader>Electricidad</MDBCardHeader>
                                        <MDBCardBody>
                                            <MDBCardTitle>Instalacion y/o Reparación</MDBCardTitle>
                                            <MDBCardText>Instalacion y/o reparacion de tomacorrientes, interruptores y breaks. Precio por unidad. Servicio tecnico por obra labor.</MDBCardText>   
                                        </MDBCardBody>
                                        <MDBCardFooter>
                                            <MDBCardText>$15000</MDBCardText>
                                        </MDBCardFooter>
                                        </div>
                                    </MDBCard>   
                                </div>
                                <div className="col-5 mx-2 my-2">
                                    <MDBCard className="d-flex flex-row">
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
}