import { BrowserRouter as Router } from "react-router-dom";
import { UserContextProvider } from "./context/user-context";
import Menu from "./components/Menu";
import MyRouters from "./router/Router";
import "./styles/login.css";

function App() {
    return (
        <UserContextProvider>
            <Router>
                <Menu />
                <MyRouters />
            </Router>
        </UserContextProvider>
    );
}

export default App;
