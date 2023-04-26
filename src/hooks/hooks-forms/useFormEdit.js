import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { BookContext } from "../../context/BookContext";

export default function useFormEdit(id) {
    const {user} = useContext(AuthContext);

    const { updateBook, books } = useContext(BookContext);

    const book = books.find(x => x._id === id);


    const [value, setValue] = useState({
        title: book.title,
        description: book.description,
        imageUrl:  book.imageUrl,
        type: book.type,
        _ownerId: user._id,
        _id: book._id
    });


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

        updateBook(id, value);
    }

    return { value, setValue, changeValue, onSubmit };
}