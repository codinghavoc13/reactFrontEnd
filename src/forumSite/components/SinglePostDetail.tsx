import { useEffect, useState } from "react";
import PostDetailModel from "../models/PostDetailModel";
import { Link, useLocation } from "react-router-dom";
import ResponseDTO from "../models/ResponseDTO";
import { convertDate, getBaseURL } from "../utils/Utility";
import { ResponseDisplay } from "./ResponseDisplay";

export const SinglePostDetail: React.FC<{}> = () => {
    const [postDetails, setPostDetails] = useState<PostDetailModel>(
        new PostDetailModel(-1,-1, -1, "", "", new Date(), new Date(), -1, "", "")
    );
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    const location = useLocation()
    const BACK_ARROW = "<<"

    useEffect(() => {
        const baseUrl = getBaseURL();
        const fetchPosts = async () => {
            // console.log("SinglePostDetail:",location)
            const allPostDetailsUrl: string = `${baseUrl}/posts/postDetail/${location.pathname.split('/')[5]}`;

            const response = await fetch(allPostDetailsUrl);
            if (!response.ok) {
                throw new Error('Something went wrong')
            }
            const responseJson = await response.json();

            const loadedPostDetails: PostDetailModel = new PostDetailModel(
                responseJson.room_id,
                responseJson.post_id,
                responseJson.poster_id,
                responseJson.post_title,
                responseJson.post_text,
                responseJson.orig_post_date,
                responseJson.last_response_date,
                responseJson.number_of_responses,
                responseJson.poster.first_name,
                responseJson.poster.last_name
            );
            if (responseJson.responses != null) {
                for (let i: number = 0; i < responseJson.responses.length; i++) {
                    loadedPostDetails.responses.push(new ResponseDTO(
                        responseJson.responses[i].response_id,
                        responseJson.responses[i].user_id,
                        responseJson.responses[i].post_id,
                        responseJson.responses[i].response_text,
                        responseJson.responses[i].response_date,
                        responseJson.responses[i].responder.first_name,
                        responseJson.responses[i].responder.last_name
                    ))
                }
            }
            setPostDetails(new PostDetailModel(-1,-1, -1, "", "", new Date(), new Date(), -1, "", ""))
            setPostDetails(loadedPostDetails)
            setIsLoading(false)
        }
        fetchPosts().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    });

    if (isLoading) {
        return (
            <div>
                <div className="nav-spacer"></div>
                <div className="container m-5">
                    <p>Loading...</p>
                </div>
            </div>
        )
    }

    if (httpError) {
        return (
            <div>
                <div className="nav-spacer"></div>
                <div className="container m-5">
                    <p>{httpError}</p>
                </div>
            </div>
        )
    }

    if (postDetails) {
        return (
            // rework this segment to use columns; need to look into using columns in the card body
            //wrapping the postText in a col-10 or 9 and the posted by info into a col-2 or 3
            <div className="container-fluid">
                <div className="nav-spacer"></div>
                <h1><Link className="nav-link" to={"/forum/room/"+postDetails.roomId}>{BACK_ARROW}Return to post list</Link></h1>
                <hr />
                <div className="card mb-3">
                    <h5 className="card-header">
                    {postDetails.postTitle}
                    </h5>
                    <div className="card-body">
                        <p className="card-text">{postDetails.postText}</p>
                        <span style={{ fontSize: "80%" }}>Posted by {postDetails.user.first_name} {postDetails.user.last_name} on {convertDate(postDetails.origPostDate)}</span>
                    </div>
                </div>
                {postDetails.responses.length > 0 && postDetails.responses.map((response) => {
                    return <ResponseDisplay key={response.responseId} response={response} />
                })}
                {postDetails.responses.length === 0 && <h4>No responses yet</h4>}
            </div>
        )
    } else {
        return (
            <div>
                <div className="nav-spacer"></div>
                <h1>An error has occurred, no post details were found</h1>
            </div>
        )
    }
}