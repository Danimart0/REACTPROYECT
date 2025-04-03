import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
        <h1>Home</h1>

        <h1>Inicia sesion para ver la Pagina </h1>
        <Link to="/login">Ir a Iniciar Sesión</Link>
            
        </div>
    );
}