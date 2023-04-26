import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function useFormRegister() {
    const [value, setValue] = useState({
        email: '',
        password: '',
        repass: '',
    });

    const { authRegister } = useContext(AuthContext);

    function changeValue(e) {
        setValue(oldValue => ({
            ...oldValue,
            [e.target.name]: e.target.value
        }));
    };

    function onSubmit(event) {
        event.preventDefault();

        if (Object.values(value).some(x => x === '')) {
            return alert('Please write the empty fields');
        }

        if(value.password.length < 4) {
            return alert('Password must be more than 4 char');
        }

        if(value.password !== value.repass) {
            return alert('Password dont match');
        }

        authRegister(value);
    }

    return { value, setValue, changeValue, onSubmit };
}