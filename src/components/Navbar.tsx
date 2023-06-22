import { NavLink } from "react-router-dom";
import { APP_ROUTES, SRC_FILES } from "../helper/utility";

const Navbar = () => {
  const links = [
    { text: "Home", icon: "fas fa-home", url: APP_ROUTES.HOME },
    { text: "Publicar", icon: "fas fa-paw", url: APP_ROUTES.PUBLICAR_MASCOTA },
    { text: "Buscar", icon: "fas fa-search", url: APP_ROUTES.BUSCAR_MASCOTA },
    {
      text: "Colaborar",
      icon: "fas fa-hands-holding",
      url: APP_ROUTES.COLABORAR,
      color: "#65CAD5",
    },
    {
      text: "Adopciones",
      icon: "fas fa-hand-holding-heart",
      url: APP_ROUTES.ADOPCIONES,
    },
  ];

<<<<<<< HEAD
    const links = [
        { text: 'Home', icon: 'fas fa-home', url: APP_ROUTES.HOME, disabled: false },
        { text: 'Publicar', icon: 'fas fa-paw', url: APP_ROUTES.PUBLICAR_MASCOTA, disabled: false },
        { text: 'Buscar', icon: 'fas fa-search', url: APP_ROUTES.BUSCAR_MASCOTA, disabled: false },
        { text: 'Colaborar', icon: 'fas fa-hands-holding', url: APP_ROUTES.COLABORAR, color: '#65CAD5', disabled: false },
        { text: 'Adopciones', icon: 'fas fa-hand-holding-heart', url: APP_ROUTES.ADOPCIONES, disabled: false }
    ]

    return (
        <nav className="navbar navbar-light navbar-expand-lg px-3 border-bottom">
            <a className="navbar-brand" href="/">
                <img src={SRC_FILES.COMPLETE_LOGO} height="80" alt="Logo Busca Mascota" />
                {/* <img className="d-none d-sm-inline" src={SRC_FILES.COMPLETE_LOGO} height="80" alt="Logo Busca Mascota" /> */}
                {/* <img className="d-inline d-sm-none" src={SRC_FILES.ONLY_LOGO} height="80" alt="Logo Busca Mascota" /> */}
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon fs-1"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav text-center">
                    {links && links.map((item, index) => (
                        <li key={index} className="nav-item">
                            <NavLink className={"nav-link py-3 px-0 px-lg-2 px-xl-3" + (item.disabled ? " disabled-link" : '')} to={item.url}>
                                <h5 className="text-dark">
                                    <i className={item.icon + ' me-2'} ></i>
                                    {item.text}
                                </h5>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
=======
  return (
    <nav className="navbar navbar-light navbar-expand-lg px-3 sticky-lg-top border-bottom">
      <a className="navbar-brand" href="/">
        <img
          src={SRC_FILES.COMPLETE_LOGO}
          height="80"
          alt="Logo Busca Mascota"
        />
        {/* <img className="d-none d-sm-inline" src={SRC_FILES.COMPLETE_LOGO} height="80" alt="Logo Busca Mascota" /> */}
        {/* <img className="d-inline d-sm-none" src={SRC_FILES.ONLY_LOGO} height="80" alt="Logo Busca Mascota" /> */}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon fs-1"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav text-center">
          {links &&
            links.map((item, index) => (
              <li key={index} className="nav-item">
                <NavLink
                  className={
                    "nav-link py-3 px-0 px-lg-2 px-xl-3" +
                    (item.disabled ? " disabled-link" : "")
                  }
                  to={item.url}
                >
                  <h5 className="text-dark">
                    <i className={item.icon + " me-2"}></i>
                    {item.text}
                  </h5>
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
>>>>>>> AdoptionFormBranch
