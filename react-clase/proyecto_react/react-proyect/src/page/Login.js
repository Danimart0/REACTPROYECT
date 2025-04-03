import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user-context";
import "../styles/login.css";

export default function Login() {
    console.log("Login renderizado");

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { setUser: setUserContext } = useContext(UserContext);

    const handleUserChange = (e) => setUser(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            username: user,
            password: password,
        };

        // Aquí estamos simulando la validación del usuario y la contraseña.
        simulateLogin(data, navigate, setUserContext);
    };

    return (
        <div className="containerLogin">
            <h3>Login</h3>
            <form className="formLogin" onSubmit={handleSubmit}>
                <div className="input-container">
                    <p>Usuario</p>
                    <input className="login-input" type="text" placeholder="Usuario" value={user} onChange={handleUserChange} />
                </div>
                <div className="input-container">
                    <p>Contraseña</p>
                    <input className="login-input" type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
                </div>
                <div className="login-button-container">
                    <button className="login-button" type="submit">Iniciar Sesión</button>
                </div>
            </form>
        </div>
    );
}

function simulateLogin(data, navigate, setUserContext) {
 
    const validUser = "testUser"; 
    const validPassword = "testPassword";

    if (data.username === validUser && data.password === validPassword) {

        const response = { token: "dummyToken" };

        localStorage.setItem("token", response.token);
        setUserContext({ name: data.username });

        alert("Bienvenido");
        navigate("/products");
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}
