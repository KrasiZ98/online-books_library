import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/hook-localStorage/useLocalStorage";
import * as authServices from "../services/authServices";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const [state, setState] = useLocalStorage('userData', []);

    const navigate = useNavigate();

    async function authLogin(userData) {
        const result = await authServices.login(userData.email, userData.password);
        setState(oldState => result);
        navigate('/');
    }

    async function authRegister(userData) {
        const result = await authServices.register(userData.email, userData.password);
        setState(oldState => result);
        navigate('/');
    }

    function authLogout() {
        setState({})
        navigate('/');
    }



    return (
        <AuthContext.Provider value={{user: state, authLogin, authRegister, authLogout}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;