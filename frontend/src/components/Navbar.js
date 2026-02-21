import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar(){

    const navigate = useNavigate();

    const logout = ()=>{

        localStorage.clear();

        navigate("/login");

    };

    const user = JSON.parse(localStorage.getItem("user"));

    return(

        <nav className="navbar navbar-dark bg-dark navbar-expand">

            <div className="container">

                <Link className="navbar-brand"
                to="/">
                    Govt Job Portal
                </Link>

                <div>

                    <Link className="btn btn-light m-1"
                    to="/portals">
                        Portals
                    </Link>

                    {user && (

                        <Link className="btn btn-warning m-1"
                        to="/bookmarks">
                            Bookmarks
                        </Link>

                    )}

                    {user?.role === "admin" && (

                        <Link className="btn btn-info m-1"
                        to="/admin">
                            Admin
                        </Link>

                    )}

                    {user ? (

                        <button
                        className="btn btn-danger m-1"
                        onClick={logout}>
                            Logout
                        </button>

                    ) : (

                        <>
                        <Link className="btn btn-success m-1"
                        to="/login">
                            Login
                        </Link>

                        <Link className="btn btn-primary m-1"
                        to="/register">
                            Register
                        </Link>
                        </>

                    )}

                </div>

            </div>

        </nav>

    );

}

export default Navbar;