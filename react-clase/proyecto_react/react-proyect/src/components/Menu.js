import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/user-context";
import "../styles/Menu.css";

export default function Menu() {
    const location = useLocation();
    const { user } = useContext(UserContext);

    return (
        <>
            {user && location.pathname !== "/login" && (
                <header className="App-header">
                    <nav>
                        <ul>
                            <li><Link to="/Home">Inicio</Link></li>
                            <li><Link to="/about">Acerca de</Link></li>
                            <li><Link to="/contact">Contacto</Link></li>
                            <li><Link to="/products">Productos</Link></li>
                        </ul>
                    </nav>
                </header>
            )}
        </>
    );
}
