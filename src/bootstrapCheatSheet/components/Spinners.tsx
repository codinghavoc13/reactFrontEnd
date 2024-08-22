// import React from 'react';

export const Spinners = () => {
    return (
        <div>
            <div className="nav-spacer"></div>
            <h1>Spinners</h1>
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div><br/>
            <div className="spinner-grow text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div><br/>
            <button className="btn btn-success" type="button">
                {/* <!--Want to see something funny, put text inside the span--> */}
                <span className="spinner-border spinner-border-sm"></span> Loading...
            </button>
        </div>
    )
}