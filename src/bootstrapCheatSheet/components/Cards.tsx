// import React from 'react';

export const Cards = () => {
    return (
        <div>
            <div className="nav-spacer"></div>
            <h1>Cards</h1>
            <div className="card">
                <h5 className="card-header">Card Header</h5>
                <div className="card-body">
                    <h5 className="card-title">Card Title inside Card Body</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget aliquet justo.
                        Etiam imperdiet eleifend ipsum et dictum. Cras ligula nisi, finibus at justo eget, accumsan
                        fermentum magna. Donec vestibulum ultrices nisi, vel ornare dui ultricies quis. Nulla sed
                        ultricies nibh, in molestie massa. Sed volutpat auctor nunc ac malesuada. Sed quis nunc sit amet
                        elit efficitur vestibulum sit amet auctor ipsum.</p>
                </div>
                <div className="card-footer text-muted">
                    Card Footer with Muted Text
                </div>
            </div>
        </div>
    )
}