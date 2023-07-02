import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-md bg-transparent">
            <a className="navbar-brand ms-4" href="#"><img className="logo" src={process.env.PUBLIC_URL + '/Images/logoWhite.jpg'}/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto me-3">
                    <li className="nav-item nav-red active">
                        <a className="nav-link" href="#home">Accueil</a>
                    </li>
                    <li className="nav-item nav-red">
                        <a className="nav-link" href="#how">Fonctionnement</a>
                    </li>
                    <li className="nav-item nav-red">
                        <a className="nav-link" href="#contact">Nous joindre</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#connexion">Connexion</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={{display:"none"}} href="#connexion"><FontAwesomeIcon icon="fa-solid fa-gear" style={{color: "#c30606",}} /> Compte</a>
                    </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;