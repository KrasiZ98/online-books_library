import { useContext, useState } from "react";
import { BookContext } from "../../context/BookContext";
import { AuthContext } from "../../context/AuthContext";

export default function useFormCreate() {
    const {user} = useContext(AuthContext);

    const [value, setValue] = useState({
        title: '',
        description: '',
        imageUrl: '',
        type: '',
        _ownerId: user._id,
    });

    const { createBook } = useContext(BookContext);

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

        createBook(value);
    }

    return { value, setValue, changeValue, onSubmit };
}