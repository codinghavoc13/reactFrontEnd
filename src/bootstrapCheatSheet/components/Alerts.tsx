// import React from 'react';

export const Alerts = () => {
    return (
        <div>
            <div className="nav-spacer" id="alerts"></div>
            <h1>Alerts</h1>
            <div className="alert alert-primary" role="alert">
                Primary Alert <a href="#alerts" className="alert-link">With a link</a>
            </div>
            <div className="alert alert-success" role="alert">
                Success Alert
            </div>
            <div className="alert alert-warning" role="alert">
                Warning Alert
            </div>
            <div className="alert alert-secondary" role="alert">
                Secondary Alert
            </div>
            <div className="alert alert-danger" role="alert">
                Danger Alert
            </div>
            <div className="alert alert-info" role="alert">
                Info Alert
            </div>
        </div>
    )
}