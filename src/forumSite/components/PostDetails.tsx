import { Link } from "react-router-dom";
import PostDetailModel from "../models/PostDetailModel";

export const PostDetails: React.FC<{ post: PostDetailModel, roomId: number }> = (props) => {
    function convertDate(date: Date) {
        let result: string = ""
        let dateString = date.toString()
        result = dateString.substring(0, 10)
        //Yes, I am accepting the chance that type conversion may fail
        let hour = Number(dateString.substring(11, 13))
        let ampm = "am"
        if (hour > 12) {
            hour = hour - 12
        }
        let minute = dateString.substring(14, 16)
        result = result + " " + hour.toString() + ":" + minute + ampm
        return result
    }

    //Need to look into pagination

    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card mb-5">
                <h5 className="card-header">
                    {/* the text in here is not wrapping when the screen is smaller */}
                    <Link className="nav-link" to={"/forum/room/" + props.roomId + "/post/" + props.post.postId}>{props.post.postTitle}</Link>
                </h5>
                <div className="card-body">
                    <h5 className="card-title">Posted by: {props.post.user.first_name} {props.post.user.last_name}</h5>
                    <p className="card-text">{props.post.postText}</p>
                    <span style={{ fontSize: "80%" }}>Posted: {convertDate(props.post.origPostDate)}</span>
                </div>
                <div className="card-footer text-muted">
                <Link className="nav-link" to={"/forum/room/" + props.roomId + "/post/" + props.post.postId}><span>Number of responses: {props.post.numberOfResponses}</span></Link>
                </div>
            </div>
        </div>
    )
}