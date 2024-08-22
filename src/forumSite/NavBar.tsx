import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar: React.FC<{}> = (props) => {

    return (
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark fixed-top navbar-static-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ournavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="ournavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="btn btn-dark" to={"/forum/rooms"}>Room List</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}