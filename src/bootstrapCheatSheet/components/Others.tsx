export const Others = () => {
    return (
        <div>
            <div className="nav-spacer"></div>
            <h1>Hide and Seek</h1>
            <div className="d-none d-md-block">
                This text is designed to be hidden on small screens and only visible on medium sized screens and larger
            </div>
            <div className="d-md-none d-block">
                This text is designed to only be visible on small screens and hidden on medium sized screens and larger
            </div>
        </div>
    )
}