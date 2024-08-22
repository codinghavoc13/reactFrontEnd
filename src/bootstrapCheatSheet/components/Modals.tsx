// import React from 'react';

export const Modals = () => {
    return (
        <div>
            <div className="nav-spacer"></div>
            <h1>Modals</h1>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                data-bs-target="#openmodal">Show Modal</button>
            <div className="modal fade" id="openmodal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1>Hello</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            Welcome!
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}