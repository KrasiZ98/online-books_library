import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import useGetAllBooks from "../hooks/hooks-requests/useGetAllBooks";
import * as bookServices from "../services/bookServices";

export const BookContext = createContext();

const BookContextProvider = (props) => {

    const [books, setBooks]= useGetAllBooks([]);

    const navigate = useNavigate();

    async function createBook(book) {
        console.log(book)
        const result = await bookServices.create(book);
        setBooks(oldBooks => [...oldBooks, result]);
        navigate('/')
    }

    async function updateBook(id, book) {
        const result = await bookServices.update(id, book);
        setBooks(books.map(x => x._id === id ? result : x));
        navigate(`/details/${id}`);
    }
 
    async function deleteBook(id) {
        await bookServices.remove(id)
        setBooks(books.filter(x => x._id !== id))
        navigate('/')
    }

    return (
        <BookContext.Provider value={{books, createBook, updateBook, deleteBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;