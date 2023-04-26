import { Link, useParams } from "react-router-dom"
import useGetById from "../../hooks/hooks-requests/useGetById";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Details = () => {
    const params = useParams();

    const [book, setBook] = useGetById(params.id, []);
    const { user } = useContext(AuthContext);

    const isOwner = book._ownerId === user._id;

    console.log(book._ownerId, user._id)

    return (
        <section id="details-page" className="details">
            <div className="book-information">
                <h3>{book.title}</h3>
                <p className="type">Type: {book.type}</p>
                <p className="img"><img src={book.imageUrl} /></p>
                <div className="actions">
                    {/* <!-- Edit/Delete buttons ( Only for creator of this book )  --> */}
                    {isOwner && <>
                        <Link className="button" to={`/edit/${book._id}`}>Edit</Link>
                        <Link className="button" to={`/delete/${book._id}`}>Delete</Link>
                    </>}


                    {/* <!-- Bonus --> */}
                    {/* <!-- Like button ( Only for logged-in users, which is not creators of the current book ) --> */}
                   

                    {/* <!-- ( for Guests and Users )  --> */}

                    {/* <!-- Bonus --> */}
                </div>
            </div>
            <div className="book-description">
                <h3>Description:</h3>
                <p>{book.description}</p>
            </div>
        </section>
    )
}