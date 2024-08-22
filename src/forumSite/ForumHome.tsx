import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";

export const ForumHome = () => {
    

    return (
        <div>
            <NavBar/>
            <div className="nav-spacer"></div>
            <div>
                <h1>Still under construction</h1>
                <p>This site is my attempt at a basic forum chat room type application. I still have a lot that I plan to work on</p>
                {/* Add links to approriate pages: Room list, user login */}
                <Link className="btn btn-dark" to={"/forum/rooms"}>Room List</Link>
            </div>
        </div>
    )
}