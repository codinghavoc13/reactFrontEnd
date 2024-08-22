// import React from 'react';

export const Accordion = () => {
    return (
        <div>
            <div className="nav-spacer"></div>
            <h1>Accordion</h1>
            <div className="accordion">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne">
                            Learn More Here</button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show">
                        <div className="accordion-body">Here's what you can learn</div>
                    </div>
                </div>
            </div>
        </div>
    )
}