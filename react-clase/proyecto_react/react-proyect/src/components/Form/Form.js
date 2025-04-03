import MyInput from "./MyInput"
import { useContext } from "react"
import { userContext, UserContextProvider } from "../../context/UserContext"

export default function From(){
    
    return(
        <UserContextProvider>
            <FromContent/>
        </UserContextProvider>
    )
}

function FormContent() {
    const { user, setUser } = useContext(UserContext)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    }
        const inputName = {
            type: "text",
            placeholder: "Name",
            valor: "carlos",
            funcion: handleChange,
            name: "name"
        }
        const inputEmail = {
            type: "text",
            placeholder: "Email",
            valor: "carlos@gmail.com",
            funcion: handleChange,
            name: "email"
        }
        const inputAge = {
            type: "text",
            placeholder: "Age",
            valor: "25",
            funcion: handleChange,
            name: "age"
        }
    return(
        
        <from className="myForm">  
        {/* poner ... sirve para imprimir multiples parametros juntos */}
        <MyInput {...inputName}/>
        <MyInput {...inputEmail}/>
        <MyInput {...inputAge}/>
        
    </from>
    )
}