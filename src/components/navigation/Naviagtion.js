import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

export const Navigation = () => {
    const { user } = useContext(AuthContext);

    return (
        <header id="site-header">
            {/* <!-- Navigation --> */}
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/">Dashboard</Link>
                    {/* <!-- Guest users --> */}
                    {user.email
                        ? <div id="user">
                            <span>Welcome, {user.email}</span>
                            <Link className="button" to="/profile">My Books</Link>
                            <Link className="button" to="/create">Add Book</Link>
                            <Link className="button" to="/logout">Logout</Link>
                        </div> : <div id="guest">
                            <Link className="button" to="/login">Login</Link>
                            <Link className="button" to="/register">Register</Link>
                        </div>}

                    {/* <!-- Logged-in users --> */}

                </section>
            </nav>
        </header>
    )
}