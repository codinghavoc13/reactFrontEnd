export const Buttons = () => {
    return (
        <div>
            <div className="nav-spacer"></div>
            <h1>Buttons</h1>
            <button type="button" className="btn btn-primary">Primary</button><br/>
            <button type="button" className="btn btn-success btn-lg">Success Large</button><br/>
            <button type="button" className="btn btn-warning btn-sm">Warning Small</button><br/>
            <button type="button" className="btn btn-secondary">Secondary</button><br/>
            <button type="button" className="btn btn-danger" disabled>Danger Disabled</button><br/>
            <button type="button" className="btn btn-info">Info</button><br/>
            <p>These two buttons are in a button-group so there is no space between the two buttons</p>
            <div className="btn-group" style={{backgroundColor:"gray", padding:"10px"}}>
                <button type="button" className="btn btn-light">Light in a group</button>
                <button type="button" className="btn btn-outline-dark">Dark outline in a group</button>
            </div>
        </div>
    )
}