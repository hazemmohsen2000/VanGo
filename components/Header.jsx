import React from "react"
import { Link, NavLink } from "react-router-dom"
import imageUrl from "/assets/images/avatar-icon.png"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    const isLoggedIn = localStorage.getItem("loggedin")
    const [isLogin, setIsLogin] = React.useState(isLoggedIn);
    function fakeLogOut() {
        localStorage.removeItem("loggedin")
        setIsLogin(false)
    }
    return (
        <header>
            <Link className="site-logo" to="/">#VanGO</Link>
            <nav>
                <NavLink
                    to="/host"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Host
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink
                    to="/vans"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>
                <Link to="login" className="login-link">
                    <img
                        src={imageUrl}
                        className="login-icon"
                    />
                </Link>
                        {isLoggedIn &&<button onClick={fakeLogOut}>logout</button> 
                        }
            </nav>
        </header>
    )
}