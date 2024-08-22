import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar: React.FC<{updateViewFlag: Function}> = (props) => {

    return (
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark fixed-top navbar-static-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>Home</Link>
                <span typeof='button' onClick={() => props.updateViewFlag('home')} className="navbar-brand">BSC Home</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ournavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="ournavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item"><span className="nav-link"
                            onClick={() => props.updateViewFlag('containers')} >Containers</span></li>
                        <li className="nav-item"><span className="nav-link"
                            onClick={() => props.updateViewFlag('buttons')} >Buttons</span></li>
                        <li className="nav-item"><span className="nav-link"
                            onClick={() => props.updateViewFlag('dropdowns')} >Dropdowns</span></li>
                        <li className="nav-item"><span className="nav-link"
                            onClick={() => props.updateViewFlag('cards')} >Cards</span></li>
                        <li className="nav-item"><span className="nav-link"
                            onClick={() => props.updateViewFlag('alerts')} >Alerts</span></li>
                        <li className="nav-item"><span className="nav-link"
                            onClick={() => props.updateViewFlag('spinners')} >Spinners</span></li>
                        <li className="nav-item"><span className="nav-link"
                            onClick={() => props.updateViewFlag('progressBar')} >Progress Bars</span></li>
                        <li className="nav-item"><span className="nav-link"
                            onClick={() => props.updateViewFlag('collapse')} >Collapse</span></li>
                        <li className="nav-item"><span className="nav-link"
                            onClick={() => props.updateViewFlag('accordion')} >Accordion</span></li>
                        <li className="nav-item"><span className="nav-link"
                            onClick={() => props.updateViewFlag('rowsAndColumns')} >Rows and Columns</span></li>
                        <li className="nav-item"><span className="nav-link"
                            onClick={() => props.updateViewFlag('tables')} >Tables</span></li>
                        <li className="nav-item"><span className="nav-link"
                            onClick={() => props.updateViewFlag('forms')} >Forms</span></li>
                        <li className="nav-item"><span className="nav-link"
                            onClick={() => props.updateViewFlag('modals')} >Modals</span></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}