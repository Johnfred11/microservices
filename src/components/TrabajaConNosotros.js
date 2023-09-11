import "./styles.css";

import React, { useState } from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBCardHeader,
    MDBRipple,
    MDBCardFooter,
    MDBInput,
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBCardSubTitle,
    MDBCheckbox,
    MDBTextArea
  } from 'mdb-react-ui-kit';



export default function TrabajaConNosotros(){
    const [showModal, setShowModal] = useState(false);
    const changeShowModal = () => setShowModal(!showModal);

    const [classLogin, setClassLogin] = useState("show active");
    const [classRegister, setClassRegister] = useState("");
    const [classBtnLogin, setClassBtnLogin] = useState("active");
    const [classBtnRegister, setClassBtnRegister] = useState("");
    const [classAlertSuccess, setClassAlertSuccess] = useState("d-none");

    /*Clase para ocultar y mostrar el formulario de registro en alternancia con el de login */
    const updateClassRegister = () => {
        setClassBtnRegister("active");
        setClassBtnLogin("")
        setClassRegister("show active");
        setClassLogin("");
    };
    
    /*Clase para ocultar y mostrar el formulario de login en alternancia con el de registro */
    const updateClassLogin = () => {
        setClassBtnRegister("");
        setClassBtnLogin("active")
        setClassLogin("show active");
        setClassRegister("");
        setClassAlertSuccess("d-none");
    };

    /*Clase para mostrar el mensaje de cuenta creada del formulario de registro */
    const updateClassAlertSuccess = () => {
        if(classAlertSuccess == "d-none"){
            setClassAlertSuccess("d-block");
        }else{
            setClassAlertSuccess("d-none");
        }


    };

    /*Clase para ocultar y mostrar el modal con los formularios de registro y login, se muestran al dar click en Registro o Iniciar sesion en la Landing Page */
    function modalClose(e){
        const formModal = document.getElementById("contentModal").contains(e.target)
        if(!formModal){
            changeShowModal();
        }
    }


    return(
        <>
        {/*<!-- Navigation-->*/}
            
        

                <MDBModal show={showModal}  tabIndex='-1' onClick={modalClose} className="modal-lg">
                {/*<!-- Modal login-->*/}
                {/* <!-- Pills navs --> */}
                <MDBModalDialog className="modal-dialog">
                    <MDBModalContent className="px-5" id="contentModal">    
                    <div className="bg-primary decoracion"></div>                      
                        <MDBModalHeader className="justify-content-center">                          
                            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className={`nav-link ${classBtnLogin}`} id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                                    aria-controls="pills-login" aria-selected="true" onClick={updateClassLogin}>Login</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className={`nav-link ${classBtnRegister}`} id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
                                    aria-controls="pills-register" aria-selected="false" onClick={updateClassRegister}>Register</a>
                                </li>
                            </ul>
                        </MDBModalHeader>
                        <MDBModalBody className="justify-content-center px-5">
                {/* <!-- Pills navs --> */}
                            {/* <!-- Pills content --> */}
                            
                            <div className="tab-content">
                            <div className={`tab-pane fade ${classLogin}`} id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                                
                                <form>
                                
                                <h2 className="text-center my-4 razon-social">MicroServices</h2>

                                {/* <!-- Email input --> */}
                                <div className="form-outline mb-4">
                                    <MDBInput label='Username' className="icon-placeholder" id='form1' type='text'required placeholder="  Username"/>
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="form-outline mb-4">
                                    <MDBInput label='Password' className="icon-placeholder" id='form1' type='text'required placeholder="  Password"/>                                 
                                </div>
                                <div className="text-center mb-3">
                                    <p>Conectar con:</p>
                                    <button type="button" class="btn btn-link btn-floating mx-1 rounded-circle border">
                                    <i className="fab fa-facebook-f"></i>
                                    </button>

                                    <button type="button" class="btn btn-link btn-floating mx-1  rounded-circle border">
                                    <i className="fab fa-google"></i>
                                    </button>

                                    <button type="button" class="btn btn-link btn-floating mx-1  rounded-circle border">
                                    <i className="fab fa-twitter"></i>
                                    </button>

                                    <button type="button" class="btn btn-link btn-floating mx-1  rounded-circle border">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                    </button>
                                </div>
                                {/* <!-- 2 column grid layout --> */}
                                <div className="row mb-4">
                                    <div className="col-md-6 d-flex justify-content-center">
                                    {/* <!-- Checkbox --> */}
                                    <div className="form-check mb-3 mb-md-0">
                                        <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                                        <label className="form-check-label" for="loginCheck"> Remember me </label>
                                    </div>
                                    </div>

                                    <div className="col-md-6 d-flex justify-content-center">
                                    {/* <!-- Simple link --> */}
                                    <a href="#!">Forgot password?</a>
                                    </div>
                                </div>

                                {/* <!-- Submit button --> */}
                                <div className="d-flex justify-content-center">
                                    <Link to="/perfil-trabajador" type="submit" target="_self" className="btn btn-primary btn-block mb-4">Sign in</Link>
                                </div>

                                {/* <!-- Register buttons --> */}
                                <div className="text-center">
                                    <p>¿No estas registrado? <a href="#!">Registrarse</a></p>
                                </div>
                                </form>
                            </div>
                            <div className={`tab-pane fade ${classRegister}`} id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                                <div className={classAlertSuccess}><p className="alert alert-success"><i className="fas fa-check-circle me-3"></i>Te has Registrado exitosamente! Verifica tu correo electronico e <a>Inicia Sesión</a></p></div>
                                <h2 className="text-center my-4 razon-social">MicroServices</h2>
                                <form >
                                {/* <!-- Name input --> */}
                                <div className="form-outline mb-4">
                                    <MDBInput label='Nombres' className="icon-placeholder" id='form1' type='text'required placeholder="  Nombres"/> 
                                </div>
                                {/* <!-- Lastname input --> */}
                                <div className="form-outline mb-4">
                                    <MDBInput label='Apellidos' className="icon-placeholder" id='form1' type='text'required placeholder="  Apellidos"/> 
                                    
                                </div>
                                {/* <!-- Telephone number input --> */}
                                <div className="form-outline mb-4">
                                    <MDBInput label='Telefono' className="icon-placeholder" id='form1' type='text'required placeholder="  Telefono"/>
                                </div>
                                {/* <!-- Address number input --> */}
                                <div className="form-outline mb-4">
                                    <MDBInput label='Direccion' className="icon-placeholder" id='form1' type='text'required placeholder="  Direccion"/>                                   
                                </div>
                                {/* <!-- Document number input --> */}
                                <div className="form-outline mb-4">
                                    <MDBInput label='Documento' className="icon-placeholder" id='form1' type='text'required placeholder="  Documento"/>                                     
                                </div>
                                {/* <!-- Email input --> */}
                                <div className="form-outline mb-4">
                                    <MDBInput label='Email' className="icon-placeholder" id='form1' type='email'required placeholder="  Email"/>  
                                </div>

                                {/* <!-- Username input --> */}
                                <div className="form-outline mb-4">
                                    <MDBInput label='Username' className="icon-placeholder" id='form1' type='text'required placeholder="  Username"/>  
                                </div>                           

                                {/* <!-- Password input --> */}
                                <div className="form-outline mb-4">
                                    <MDBInput label='Password' className="icon-placeholder" id='form1' type='password'required placeholder="  Password"/>  
                                </div>

                                {/* <!-- Repeat Password input --> */}
                                <div className="form-outline mb-4">
                                    <MDBInput label='Repeat Password' className="icon-placeholder" id='form1' type='password'required placeholder="  Repeat Password"/>  
                                </div>
                                
                                <div className="text-center mb-3">
                                    <p>Conectar con:</p>
                                    <button type="button" className="btn btn-link btn-floating mx-1  rounded-circle border">
                                    <i className="fab fa-facebook-f"></i>
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1  rounded-circle border">
                                    <i className="fab fa-google"></i>
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1  rounded-circle border">
                                    <i className="fab fa-twitter"></i>
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1  rounded-circle border">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                    </button>
                                </div>
                                
                                {/* <!-- Checkbox --> */}
                                <div className="form-check d-flex justify-content-center mb-4">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                                    aria-describedby="registerCheckHelpText" />
                                    <label className="form-check-label" for="registerCheck">
                                    He leido los Terminos y Condiciones.
                                    </label>
                                </div>

                                {/* <!-- Submit button --> */}
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-primary btn-block mb-3" onClick={updateClassAlertSuccess} >Continuar</button>
                                </div>
                                </form>
                            </div>
                            </div>
                            {/* <!-- Pills content --> */}
                            {/*<!-- fin Modal-->*/}
                        </MDBModalBody>
                        <MDBModalFooter className="justify-content-center">
                            <MDBBtn color='secondary' onClick={changeShowModal}>
                                Cerrar
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                    <MDBModalContent className="px-5 " id="contentModal">    
                    <div className="bg-primary decoracion"></div>   
                        <h2 className="text-center my-4 razon-social">MicroServices</h2>                   
                        <MDBModalHeader className="justify-content-center d-flex flex-column ">                          
                            <h3 className="text-start ">Hoja de vida</h3>
                            <MDBCard className="col-12 py-3 px-5 mx-4 my-3">
                            <MDBCardBody>
                            <MDBCardTitle  className="text-center">Información Laboral</MDBCardTitle>
                            <MDBCardText>
                                <p>Area u ocupacion</p>
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Electricidad' />
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Construccion' defaultChecked />
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Plomeria' />
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Limpieza y aseo' />
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Mantenimiento y reparación' />
                                <div className="d-flex ">
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='otros' className=""/>
                                    <MDBInput label='¿Cual?' className="icon-placeholder d-inline col-4" id='form1' type='text'  required />
                                </div>
                                
                                
                            </MDBCardText>
                            <hr/>
                            <MDBCardText>
                                <p>A continuación indique su experiencia laboral<br/> *Aplica experiencia formal e informal*</p>
                                <MDBInput label='Cargo u ocupación' className="icon-placeholder my-3" id='form1' type='text'required />
                                <MDBInput label='Jefe inmediato o cliente' className="icon-placeholder my-3" id='form1' type='text'required />
                                <MDBInput label='Numero de contacto' className="icon-placeholder my-3" id='form1' type='text'required />
                                <MDBTextArea label='Funciones realizadas' id='textAreaExample' rows={4} className="my-3"/>
                                <MDBBtn color='primary' className="my-3 mx-4">
                                Guardar
                                </MDBBtn>
                                <MDBBtn color='primary'  className="my-3 mx-4">
                                    Agregar experiencia
                                </MDBBtn>
                                </MDBCardText>
                            
                            <hr/>
                            <MDBCardText>
                                <p>Ingrese los datos de contacto de 2 referencias personales y 1 familiar</p>
                                <span className="my-3">Referencias personales</span>
                                <MDBInput label='Nombres y apellidos' className="icon-placeholder my-3" id='form1' type='text'required />
                                <MDBInput label='Numero de contacto' className="icon-placeholder my-3" id='form1' type='text'required />
                                <MDBInput label='Ocupacion' className="icon-placeholder my-3" id='form1' type='text'required />

                                <MDBInput label='Nombres y apellidos' className="icon-placeholder my-3" id='form1' type='text'required />
                                <MDBInput label='Numero de contacto' className="icon-placeholder my-3" id='form1' type='text'required />
                                <MDBInput label='Ocupacion' className="icon-placeholder my-3" id='form1' type='text'required />

                                <MDBBtn color='primary' >
                                    Agregar referencia
                                </MDBBtn>
                                <br/>
                                <hr />
                                <span className="my-3">Referencias familiares</span>
                                <MDBInput label='Nombres y apellidos' className="icon-placeholder my-3" id='form1' type='text'required />
                                <MDBInput label='Numero de contacto' className="icon-placeholder my-3" id='form1' type='text'required />
                                <MDBInput label='Ocupacion' className="icon-placeholder my-3" id='form1' type='text'required />
                                <MDBBtn color='primary' className="my-3 mx-4">
                                Guardar
                                </MDBBtn>
                                <MDBBtn color='primary' className="my-3 mx-4">
                                    Agregar referencia
                                </MDBBtn>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                        </MDBModalHeader>

                        <MDBModalBody className="justify-content-center px-5">
                {/* <!-- Pills navs --> */}
                            {/* <!-- Pills content --> */}
                            
                            <div className="tab-content">
                            <div className={`tab-pane fade`} id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                                <div className={classAlertSuccess}><p className="alert alert-success"><i className="fas fa-check-circle me-3"></i>Te has Registrado exitosamente! Verifica tu correo electronico e <a>Inicia Sesión</a></p></div>
                                <h2 className="text-center my-4 razon-social">MicroServices</h2>
                                <form >
                                {/* <!-- Name input --> */}
                                <div className="form-outline mb-4">
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Default checkbox' />
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Checked checkbox' defaultChecked />
                                </div>
                                {/* <!-- Lastname input --> */}
                                <div className="form-outline mb-4">
                                    <MDBInput label='Apellidos' className="icon-placeholder" id='form1' type='text'required placeholder="  Apellidos"/> 
                                    
                                </div>
                                {/* <!-- Telephone number input --> */}
                                <div className="form-outline mb-4">
                                    <MDBInput label='Telefono' className="icon-placeholder" id='form1' type='text'required placeholder="  Telefono"/>
                                </div>
                                {/* <!-- Address number input --> */}
                                <div className="form-outline mb-4">
                                    <MDBInput label='Direccion' className="icon-placeholder" id='form1' type='text'required placeholder="  Direccion"/>                                   
                                </div>
                                {/* <!-- Document number input --> */}
                                <div className="form-outline mb-4">
                                    <MDBInput label='Documento' className="icon-placeholder" id='form1' type='text'required placeholder="  Documento"/>                                     
                                </div>
                                {/* <!-- Email input --> */}
                                <div className="form-outline mb-4">
                                    <MDBInput label='Email' className="icon-placeholder" id='form1' type='email'required placeholder="  Email"/>  
                                </div>

                                {/* <!-- Username input --> */}
                                <div className="form-outline mb-4">
                                    <MDBInput label='Username' className="icon-placeholder" id='form1' type='text'required placeholder="  Username"/>  
                                </div>                           

                                {/* <!-- Password input --> */}
                                <div className="form-outline mb-4">
                                    <MDBInput label='Password' className="icon-placeholder" id='form1' type='password'required placeholder="  Password"/>  
                                </div>

                                {/* <!-- Repeat Password input --> */}
                                <div className="form-outline mb-4">
                                    <MDBInput label='Repeat Password' className="icon-placeholder" id='form1' type='password'required placeholder="  Repeat Password"/>  
                                </div>
                                
                                <div className="text-center mb-3">
                                    <p>Conectar con:</p>
                                    <button type="button" className="btn btn-link btn-floating mx-1  rounded-circle border">
                                    <i className="fab fa-facebook-f"></i>
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1  rounded-circle border">
                                    <i className="fab fa-google"></i>
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1  rounded-circle border">
                                    <i className="fab fa-twitter"></i>
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1  rounded-circle border">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                    </button>
                                </div>
                                
                                {/* <!-- Checkbox --> */}
                                <div className="form-check d-flex justify-content-center mb-4">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                                    aria-describedby="registerCheckHelpText" />
                                    <label className="form-check-label" for="registerCheck">
                                    He leido los Terminos y Condiciones.
                                    </label>
                                </div>

                                {/* <!-- Submit button --> */}
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-primary btn-block mb-3" onClick={updateClassAlertSuccess} >Continuar</button>
                                </div>
                                </form>
                            </div>
                            </div>
                            {/* <!-- Pills content --> */}
                            {/*<!-- fin Modal-->*/}
                        </MDBModalBody>
                        <MDBModalFooter className="justify-content-center">
                            <MDBBtn color='primary' onClick={changeShowModal}>
                                Terminar
                            </MDBBtn>
                            <MDBBtn color='secondary' onClick={changeShowModal}>
                                Cerrar
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </ MDBModalDialog>
                </MDBModal>
                
                <div className="d-flex flex-column">
                <nav className="navbar navbar-expand-lg navbar-light py-3  bg-dark" id="mainNav">
                    <div className="container px-4 px-lg-5 ">
                        <a className="navbar-brand text-light" href="#page-top">MicroServices</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto my-2 my-lg-0">
                                <li className="nav-item"><a className="nav-link pt-2 text-light" href="#about">Nosotros</a></li>
                                <li className="nav-item"><a className="nav-link pt-2 text-light" href="#contact">Contactenos</a></li>
                                <li className="nav-item"><Link className="nav-link pt-2 text-light" to="/trabaja-con-nosotros">Trabaja con Nosotros</Link></li>
                                <li className="nav-item px-2"><MDBBtn className="text-light" outline color='light' href="#pills-register" onClick={() =>{changeShowModal(); updateClassRegister();}}>
                                Registrarse
                                </MDBBtn></li>
                                <li className="nav-item px-2"><li className="nav-item px-2 text-light"><MDBBtn rippleColor='dark' href="#pills-login" color='light' onClick={() =>{changeShowModal(); updateClassLogin();}}>Iniciar Sesión</MDBBtn></li></li>             
                            </ul>
                
                        </div>
                    </div>
                </nav>
                <div className="d-flex flex-row">
                   <MDBCard className="col-2 p-3 ">

                     <MDBCardTitle className="ms-4">MicroServices</MDBCardTitle>
                     <MDBCardBody>
                        <MDBCardText>Registrate e inicia a trabajar en lo que te apasiona.
                            Postulate a las diferentes vacantes que tenemos para ti.
                            Demuestra tu potencial
                        </MDBCardText>
                    </MDBCardBody>
                    
                    </MDBCard>
                    <div className="p-3 ms-5 mt-4 col-8">
                        <h3>Trabaja con nosotros</h3>
                        <p className="mt-4">Si estas buscando empleo y tienenes conocimientos en alguna de las areas solicitadas, registrate y postulate para ser parte de este gran equipo de tecnicos</p>
                        <p className="mt-2">Recibe beneficios por ser parte de la familia MicroServices:</p>
                        <div className="d-flex flex-wrap mt-5">
                        <MDBCard className="col-5 py-3 px-5 mx-4 my-3 hover-overlay">
                            <MDBCardBody>
                            <MDBCardTitle className="text-center"><i class="fa-solid fa-clock"></i></MDBCardTitle>
                            <MDBCardTitle className="text-center">Manejo de horarios</MDBCardTitle>
                            <MDBCardText>Puedes gestionar tus horarios de trabajo, aunque recuerda que debes estar activo minimo 6 horas</MDBCardText>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="col-5 py-3 px-5 mx-4 my-3">
                            <MDBCardBody>
                            <MDBCardTitle className="text-center"><i class="fa-solid fa-location-dot"></i></MDBCardTitle>
                            
                            <MDBCardTitle  className="text-center">Atiende Solicitudes cerca a tu ubicacion</MDBCardTitle>
                            <MDBCardText>Recibe las solicitudes que se encuentran cerca tuyo, a si ahorraras dinero y tiempo</MDBCardText>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="col-5 py-3 px-5 mx-4 my-3">
                            <MDBCardBody>
                            <MDBCardTitle className="text-center"><i class="fa-solid fa-chalkboard-user"></i></MDBCardTitle>
                            <MDBCardTitle  className="text-center">Capacitacion constante</MDBCardTitle>
                            <MDBCardText>Recibe capacitación en habilidades tecnicas y en atencion al cliente, para que brindes un mejor servicio y seas competitivo.</MDBCardText>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="col-5 py-3 px-5 mx-4 my-3">
                            <MDBCardBody>
                            <MDBCardTitle className="text-center"><i class="fa-regular fa-money-bill-1"></i></MDBCardTitle>
                            <MDBCardTitle className="text-center">Ingresos extra</MDBCardTitle>
                            <MDBCardText>Monetiza tu tiempo libre brindando un servicio tecnico de calidad, aumenta tus ingresos y cumple tus metas.</MDBCardText>
                            </MDBCardBody>
                        </MDBCard>

                        </div>
                    </div>
                </div>
                </div>
                
        </>
    );

}