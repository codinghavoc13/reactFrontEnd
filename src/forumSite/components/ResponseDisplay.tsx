import ResponseDTO from "../models/ResponseDTO"
import { convertDate } from "../utils/Utility"

export const ResponseDisplay: React.FC<{ response: ResponseDTO }> = (props) => {
    return (
        <div className="card mb-5">
            <div className="card-body">
                <div className="row">
                <div className="col-10">
                    <p className="card-text">{props.response.responseText}</p>
                </div>
                <div className="col-2">
                    <span style={{ fontSize: "80%" }}>Posted by {props.response.user.first_name} {props.response.user.last_name} on {convertDate(props.response.responseDate)}</span>
                </div>
                </div>
            </div>
        </div>
    )
}