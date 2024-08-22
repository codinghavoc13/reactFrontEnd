import { useState } from "react"
import { NavLink, Outlet } from "react-router-dom"

/*
Look into reworking this, pulling in the view flag setup from the BCS nav bar;
each application would have it's own nav bar; replace the single Home link with a
dropdown of the major applications and the nav-bar collapse would be replaced with 
whatever the active navbar is
*/
export const Layout = () => {
    const [navbar, setNavbar] = useState("main")
    return (
        <>
            <nav className="navbar navbar-expand-xl navbar-dark bg-dark fixed-top navbar-static-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" onClick={()=>{setNavbar('main')}} to="/">Home</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ournavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="ournavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/bootstrapcheatsheet"
                                onClick={()=>{setNavbar('bootstrap')}}>-Bootstrap Cheat Sheet</NavLink>
                                </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/forum"
                                onClick={()=>{setNavbar('forum')}}>-Forum</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}