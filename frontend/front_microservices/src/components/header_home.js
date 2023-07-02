import "./styles.css";


function HeaderHome() {
    return (
      <div>
        <header className="header">
            <nav className="nav">
                <a href="" className="nav_logo">MicroServices</a>

                <ul className="nav_items">
                <li className="nav_item">
                
                    <a href="" className="nav_link">Servicios</a>
                    <a href="" className="nav_link">Contactos</a>
                    <a href="" className="nav_link">Nosotros</a>
                    <a href="" className="nav_link">registrarse</a>
                </li>
                </ul>

                <button className="button" id="form-open">Ingresar</button>
            </nav>
        </header>
      </div>
    );
  }
  
  export default HeaderHome;