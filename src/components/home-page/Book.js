import { Link } from "react-router-dom"

export const Book = ({book}) => {
    return (
        <li className="otherBooks">
        <h3>{book.title}</h3>
        <p>Type: {book.type}</p>
        <p className="img"><img src={book.imageUrl} /></p>
        <Link className="button" to={`/details/${book._id}`}>Details</Link>
    </li>
    )
}