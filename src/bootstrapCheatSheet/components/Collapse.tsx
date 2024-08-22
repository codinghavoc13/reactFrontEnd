// import React from 'react';

export const Collapse = () => {
    return (
        <div>
            <div className="nav-spacer"></div>
            <h1>Collapse</h1>
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseExample">Click Here</button>
            <div className="collapse" id="collapseExample">
                <div className="card card-body">
                    Hide me until the button is pressed
                </div>
            </div>
        </div>
    )
}