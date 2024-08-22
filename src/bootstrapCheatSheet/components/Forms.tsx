// import React from 'react';

export const Forms = () => {
    return (
        <div>
            <div className="nav-spacer"></div>
            <h1>Forms</h1>
            <form>
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input className="form-control" type="email"
                        id="email" name="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input className="form-control" type="password"
                    id="password" name="password" />
                </div>
                {/* Need to figure out text areas in React */}
                <div className="mb-3">
                    <label className="form-label" htmlFor="exampleTextArea">Example Textarea</label>
                    <textarea className="form-control" 
                        rows={3}
                        id="exampleTextArea" 
                        name="exampleTextArea" ></textarea>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="checkdefault"/>
                    <label className="form-check-label" htmlFor="checkdefault">Default Checkbox</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="radiodefault1" name="radio"/>
                    <label className="form-check-label" htmlFor="radiodefault1">Default Radio 1</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="radiodefault2" name="radio"/>
                    <label className="form-check-label" htmlFor="radiodefault2">Default Radio 2</label>
                </div>
                <button className="btn btn-primary">Submit Form</button>
            </form>
        </div>
    )
}