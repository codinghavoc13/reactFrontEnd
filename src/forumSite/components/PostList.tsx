import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PostDetailModel from "../models/PostDetailModel";
import User from "../models/User";
import { PostDetails } from "./PostDetails";
import { getBaseURL } from "../utils/Utility";

export const PostList: React.FC<{}> = () => {
    const [postDetails, setPostDetails] = useState<PostDetailModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    const location = useLocation()
    const BACK_ARROW = "<<"
    const baseUrl = getBaseURL()

    // this logic will move out of here, into the room display page
    useEffect(() => {
        // const queryUrl: string = "http://localhost:8181";
        const fetchPosts = async () => {
            // console.log(location)
            const allPostsByRoomIDUrl: string = `${baseUrl}/posts/room/${location.pathname.split('/')[3]}`;
            // console.log("PostList:",allPostsByRoomIDUrl)

            const response = await fetch(allPostsByRoomIDUrl);
            if (!response.ok) {
                throw new Error('Something went wrong')
            }
            const responseJson = await response.json();
            // console.log(responseJson)

            const loadedPostDetails: PostDetailModel[] = [];
            for (let i: number = 0; i < responseJson.length; i++) {
                let user = new User(responseJson[i].poster_id,
                    responseJson[i].poster.first_name,
                    responseJson[i].poster.last_name)
                loadedPostDetails.push({
                    roomId: responseJson[i].room_id,
                    postId: responseJson[i].post_id,
                    posterId: responseJson[i].poster_id,
                    postTitle: responseJson[i].post_title,
                    postText: responseJson[i].post_text,
                    origPostDate: responseJson[i].orig_post_date,
                    lastResponseDate: responseJson[i].last_response_date,
                    numberOfResponses: responseJson[i].number_of_responses,
                    responses: [],//setting to an empty array for this page
                    user: user
                })
                // console.log(responseJson[i].origPostDate.toISOString())
            }
            // console.log(loadedPostDetails)
            setPostDetails([])
            setPostDetails(loadedPostDetails)
            setIsLoading(false)
        }
        fetchPosts().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    },[]);

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
    return (
        <div className="container-fluid">
            <div className="nav-spacer"></div>
            <h1><Link className="nav-link" to="/forum/rooms">{BACK_ARROW}Return to room list</Link></h1>
            <hr />
            <h1>Post List</h1>
            
            <div className="row">
            {postDetails.length > 0 && postDetails.map((post) => {
                return (
                        <PostDetails key={post.postId} roomId={post.roomId} post={post} />
                )
            })}
            </div>
            {postDetails.length === 0 && <h4>No posts in this room yet</h4>}
        </div>
    )
}