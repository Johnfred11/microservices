import "./styles.css";

import HeaderHome from "./header_home";
import Header2 from "./header2";

import {
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
  } from 'mdb-react-ui-kit';

  import img1 from './assets/img/portfolio/fullsize/1.jpg';
  import img2 from "./assets/img/portfolio/thumbnails/2.jpg";
  import img3 from "./assets/img/portfolio/thumbnails/3.jpg";
  import img4 from "./assets/img/portfolio/thumbnails/4.jpg";
  import img5 from "./assets/img/portfolio/thumbnails/5.jpg";
  import img6 from "./assets/img/portfolio/thumbnails/6.jpg";

  
  
function Home() {
    return (
        <>
            {/*<head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                <title>Creative - Start Bootstrap Theme</title>
                <!-- Favicon-->
                <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
                <!-- Bootstrap Icons-->
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
                <!-- Google fonts-->
                <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic" rel="stylesheet" type="text/css" />
                <!-- SimpleLightbox plugin CSS-->
                <link href="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.css" rel="stylesheet" />
                <!-- Core theme CSS (includes Bootstrap)-->
                <link href="css/styles.css" rel="stylesheet" />
            </head>
            <body id="page-top">*/}
                {/*<!-- Navigation-->*/}
                <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                    <div className="container px-4 px-lg-5">
                        <a className="navbar-brand" href="#page-top">MicroServices</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto my-2 my-lg-0">
                                <li className="nav-item"><a className="nav-link pt-2" href="#about">Nosotros</a></li>
                                <li className="nav-item"><a className="nav-link pt-2" href="#services">Servicios</a></li>
                                <li className="nav-item"><a className="nav-link pt-2" href="#contact">Contactenos</a></li>
                                <li className="nav-item"><a className="nav-link pt-2" href="#portfolio">Trabaja con Nosotros</a></li>
                                <li className="nav-item px-2"><MDBBtn outline color='light' href="http://google.com">
                                Registrarse
                                </MDBBtn></li>
                                <li className="nav-item px-2"><MDBBtn className="" color='light' rippleColor='dark'>
                                    Iniciar  Sesión
                                </MDBBtn></li>
                                
                            </ul>
                
                        </div>
                    </div>
                </nav>
                {/*<!-- Masthead-->*/}
                <header className="masthead">
                    <div className="container px-4 px-lg-5 h-100">
                        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                            <div className="col-lg-8 align-self-end">
                                <h1 className="text-white font-weight-bold">Soluciones Outsourcing para Impulsar tu Empresa</h1>
                                <hr className="divider" />
                            </div>
                            <div className="col-lg-8 align-self-baseline">
                                <p className="text-white-75 mb-5">Descubre MicroServices: ¡la solución perfecta para tu negocio! Simplifica, maximiza y acelera con nosotros. ¡Únete a la revolución hoy!</p>
                                <a className="btn btn-primary btn-xl" href="#about">Descubre</a>
                            </div>
                        </div>
                    </div>
                </header>
                {/*<!-- About-->*/}
                <section className="page-section bg-primary" id="about">
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2 className="text-white mt-0">Potencia tu éxito con MicroServices</h2>
                                <hr className="divider divider-light" />
                                <p className="text-white-75 mb-4">Impulsa tu negocio al éxito con MicroServices. Optimiza operaciones, maximiza productividad y desata la innovación. Únete a la revolución empresarial ahora.</p>
                                <a className="btn btn-light btn-xl" href="#services">Solicita Asesoria</a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<!-- Services-->*/}
                <section className="page-section" id="services">
                    <div className="container px-4 px-lg-5">
                        <h2 className="text-center mt-0">Elige Nuestros Servicios</h2>
                        <hr className="divider" />
                        <div className="row gx-4 gx-lg-5">
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <div className="mb-2"><i className="bi-gem fs-1 text-primary"></i></div>
                                    <h3 className="h4 mb-2">Escalabilidad ilimitada</h3>
                                    <p className="text-muted mb-0">Tu negocio puede crecer sin restricciones gracias a nuestra solución.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <div className="mb-2"><i class="bi-laptop fs-1 text-primary"></i></div>
                                    <h3 className="h4 mb-2">Integración perfecta</h3>
                                    <p className="text-muted mb-0">Integra fácilmente nuestra plataforma con otros sistemas y aplicaciones.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <div className="mb-2"><i className="bi-globe fs-1 text-primary"></i></div>
                                    <h3 className="h4 mb-2">Operación sin interrupciones</h3>
                                    <p className="text-muted mb-0">Mantén tu negocio en funcionamiento con resiliencia y tolerancia a fallos.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div class="mt-5">
                                    <div className="mb-2"><i className="bi-heart fs-1 text-primary"></i></div>
                                    <h3 className="h4 mb-2">Desarrollo ágil y rápido</h3>
                                    <p className="text-muted mb-0">Entrega funcionalidades innovadoras de manera rápida y eficiente.</p>
                                </div>
                            </div>                   
                            </div>
                    </div>
                </section>
                {/*<!-- Portfolio-->*/}
                <div id="portfolio">
                    <div className="container-fluid p-0">
                        <div className="row g-0">
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="" title="Project Name">
                                    <img className="img-fluid" src={img1} alt="..." />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">Category</div>
                                        <div className="project-name">Project Name</div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="assets/img/portfolio/fullsize/2.jpg" title="Project Name">
                                    <img className="img-fluid" src={img2} alt="..." />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">Category</div>
                                        <div className="project-name">Project Name</div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="assets/img/portfolio/fullsize/3.jpg" title="Project Name">
                                    <img className="img-fluid" src={img3} alt="..." />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">Category</div>
                                        <div className="project-name">Project Name</div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="assets/img/portfolio/fullsize/4.jpg" title="Project Name">
                                    <img className="img-fluid" src={img4} alt="..." />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">Category</div>
                                        <div className="project-name">Project Name</div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="assets/img/portfolio/fullsize/5.jpg" title="Project Name">
                                    <img className="img-fluid" src={img5} alt="..." />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">Category</div>
                                        <div className="project-name">Project Name</div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="assets/img/portfolio/fullsize/6.jpg" title="Project Name">
                                    <img className="img-fluid" src={img6} alt="..." />
                                    <div className="portfolio-box-caption p-3">
                                        <div className="project-category text-white-50">Category</div>
                                        <div className="project-name">Project Name</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- Call to action-->*/}
                <section className="page-section bg-dark text-white">
                    <div className="container px-4 px-lg-5 text-center">
                        <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
                        <a className="btn btn-light btn-xl" href="https://startbootstrap.com/theme/creative/">Download Now!</a>
                    </div>
                </section>
                {/*<!-- Contact-->*/}
                <section className="page-section" id="contact">
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6 text-center">
                                <h2 className="mt-0">Let's Get In Touch!</h2>
                                <hr className="divider" />
                                <p className="text-muted mb-5">Ready to start your next project with us? Send us a messages and we will get back to you as soon as possible!</p>
                            </div>
                        </div>
                        <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                            <div className="col-lg-6">
                                {/*<!-- * * * * * * * * * * * * * * *-->
                                <!-- * * SB Forms Contact Form * *-->
                                <!-- * * * * * * * * * * * * * * *-->
                                <!-- This form is pre-integrated with SB Forms.-->
                                <!-- To make this form functional, sign up at-->
                                <!-- https://startbootstrap.com/solution/contact-forms-->
                                <!-- to get an API token!-->*/}
                                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                    {/*<!-- Name input-->
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                        <label for="name">Full name</label>
                                        <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                    </div>
                                    {/*<!-- Email address input-->*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                        <label for="email">Email address</label>
                                        <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                    </div>
                                    {/*<!-- Phone number input-->*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                        <label for="phone">Phone number</label>
                                        <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                    </div>
                                    {/*<!-- Message input-->*/}
                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: "10rem"}} data-sb-validations="required"></textarea>
                                        <label for="message">Message</label>
                                        <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                    </div>
                                    {/*<!-- Submit success message-->
                                    <!---->
                                    <!-- This is what your users will see when the form-->
                                    <!-- has successfully submitted-->*/}
                                    <div className="d-none" id="submitSuccessMessage">
                                        <div className="text-center mb-3">
                                            <div className="fw-bolder">Form submission successful!</div>
                                            To activate this form, sign up at
                                            <br />
                                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                        </div>
                                    </div>
                                    {/*<!-- Submit error message-->
                                    <!---->
                                    <!-- This is what your users will see when there is-->
                                    <!-- an error submitting the form-->*/}
                                    <div className="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                                    {/*<!-- Submit Button-->*/}
                                    <div className="d-grid"><button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Submit</button></div>
                                </form>
                            </div>
                        </div>
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-lg-4 text-center mb-5 mb-lg-0">
                                <i className="bi-phone fs-2 mb-3 text-muted"></i>
                                <div>+1 (555) 123-4567</div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<!-- Footer-->*/}
                <footer className="bg-light py-5">
                    <div className="container px-4 px-lg-5"><div class="small text-center text-muted">Copyright &copy; 2023 - Company Name</div></div>
                </footer>
                {/*<!-- Bootstrap core JS-->*/}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
                {/*<!-- SimpleLightbox plugin JS-->*/}
                <script src="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.js"></script>
                {/*<!-- Core theme JS-->*/}
                <script src="js/scripts.js"></script>
                {/*<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
                <!-- * *                               SB Forms JS                               * *-->
                <!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->
                <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->*/}
                <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
        </>
    )
}

export default Home;