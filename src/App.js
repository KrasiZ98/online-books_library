import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation/Naviagtion";
import { Home } from "./components/home-page/Home";
import { Login } from "./components/login-page/Login";
import { Regtister } from "./components/register-page/Register";
import { Create } from "./components/create-page/Create";
import { Details } from "./components/details-page/Details";
import { Edit } from "./components/edit-page/Edit";
import { Profile } from "./profile-page/Profile";
import { Footer } from "./footer/Footer";
import AuthContextProvider from "./context/AuthContext";
import { Logout } from "./components/logout/Logout";
import BookContextProvider from "./context/BookContext";
import { Delete } from "./components/delete/Delete";
import { RouteGards } from "./util/RouteGards";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import { NotFound } from "./components/not-found-page/NotFound";


function App() {
    return (
        <>
            <AuthContextProvider >

                <Navigation />
                <BookContextProvider >
                    <ErrorBoundary >
                        <Routes >
                            <Route path="/" element={<Home />} ></Route>
                            <Route path="/login" element={<Login />} ></Route>
                            <Route path="/register" element={<Regtister />} ></Route>
                            <Route path="/create" element={<RouteGards > <Create /> </RouteGards>} ></Route>
                            <Route path="/details/:id" element={<Details />} ></Route>
                            <Route path="/edit/:id" element={<RouteGards > <Edit /> </RouteGards>} ></Route>
                            <Route path="/delete/:id" element={<RouteGards > <Delete /> </RouteGards>} ></Route>
                            <Route path="/profile" element={<RouteGards > <Profile /> </RouteGards>} ></Route>
                            <Route path="/logout" element={<Logout />} ></Route>
                            <Route path="/*" element={<NotFound />} ></Route>
                        </Routes>
                    </ErrorBoundary>
                </BookContextProvider>
            </AuthContextProvider>

            <Footer />

        </>


    );
}

export default App;
