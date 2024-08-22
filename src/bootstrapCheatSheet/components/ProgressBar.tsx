export const ProgressBar = () => {
    return (
        <div>
            <div className="nav-spacer"></div>
            <h1>Progress Bars</h1>
            <div className="progress">
                <div className="progress-bar progress-bar" style={{ width: "40%" }}>40%</div>
            </div>
            <br />
            <div className="progress">
                <div className="progress-bar progress-bar-striped" style={{ width: "60%" }}>60%</div>
            </div>
            <br />
            <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated"
                    style={{ width: "80%" }}>80%</div>
            </div>
        </div>
    )
}