import { Navigate, useParams } from "react-router-dom"
import useGetById from "../../hooks/hooks-requests/useGetById";
import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import { AuthContext } from "../../context/AuthContext";

export const Delete = () => {
    const params = useParams();

    const [book, setBook] = useGetById(params.id, []);
    const {deleteBook} = useContext(BookContext);
    const {user} = useContext(AuthContext);

    if(book._ownerId !== user._id) {
        alert('Cannot use this function')
       return <Navigate to={'/'} ></Navigate> 
    } else {
        deleteBook(params.id)
    }
}