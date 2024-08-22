// import React from 'react';

export const Dropdowns = () => {
    return (
        <div>
            <div className="nav-spacer"></div>
            <h1>Dropdowns</h1>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">Containers Sizes</button>
                <ul className="dropdown-menu">
                    <li className="dropdown-item" >Small</li>
                    <li className="dropdown-item" >Medium</li>
                    <li className="dropdown-item" >Large</li>
                    <li className="dropdown-item" >XL</li>
                    <li className="dropdown-item">XXL</li>
                </ul>
            </div>
        </div>
    )
}