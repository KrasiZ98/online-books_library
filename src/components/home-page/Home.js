import { useContext } from "react"
import { BookContext } from "../../context/BookContext"
import { Book } from "./Book";

export const Home = () => {
    const { books } = useContext(BookContext);
    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            {/* <!-- Display ul: with list-items for All books (If any) --> */}
            <ul className="other-books-list">
                {books.length > 0 ? books.map(x => <Book key={x._id} book={x} />) : <p className="no-books">No books in database!</p>}
            </ul>
            {/* <!-- Display paragraph: If there are no books in the database --> */}

        </section>
    )
}