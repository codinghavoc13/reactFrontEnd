import { Link } from "react-router-dom";
import Room from "../models/Room";

export const RoomDetail: React.FC<{ room: Room }> = (props) => {
    // useEffect(()=>{
    //     document.title = "Forum - " + props.room.roomTitle
    // },[])

    return (
            <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                <h3><Link style={{ width: "100%" }} className="btn btn-dark" to={"/forum/room/" + props.room.roomId}>View Posts in {props.room.roomTitle}</Link></h3>
                <span>{props.room.roomDescription}</span>
            </div>
    )
}

//backup
// const [postDetails, setPostDetails] = useState<PostDetailModel[]>([]);
    // const [isLoading, setIsLoading] = useState(true);
    // const [httpError, setHttpError] = useState(null);

    // const location = useLocation()
    // console.log("RoomDetail:",location)

    //this logic will move out of here, into the room display page
    // useEffect(() => {
    //     const baseUrl: string = "http://localhost:8181/rooms/all";
    //     const fetchPosts = async () => {
    //         // const getPostsByRoomIDUrl: string = `${baseUrl}/room/${props.room.roomId}`;

    //         const response = await fetch(baseUrl);
    //         if (!response.ok) {
    //             throw new Error('Something went wrong')
    //         }
    //         const responseJson = await response.json();
    //         // console.log(responseJson)

    //         const loadedPostDetails: PostDetailModel[] = [];
    //         for (let i: number = 0; i < responseJson.length; i++) {
    //             let user = new User(responseJson[i].poster_id,
    //                 responseJson[i].poster.first_name,
    //                 responseJson[i].poster.last_name)
    //             loadedPostDetails.push({
    //                 postId: responseJson[i].post_id,
    //                 posterId: responseJson[i].poster_id,
    //                 postTitle: responseJson[i].post_title,
    //                 postText: responseJson[i].post_text,
    //                 origPostDate: responseJson[i].orig_post_date,
    //                 lastResponseDate: responseJson[i].last_response_date,
    //                 numberOfResponses: responseJson[i].number_of_responses,
    //                 responses: [],//setting to an empty array for this page
    //                 user: user
    //             })
    //             // console.log(responseJson[i].origPostDate.toISOString())
    //         }
    //         // console.log(loadedPostDetails)
    //         setPostDetails([])
    //         setPostDetails(loadedPostDetails)
    //         setIsLoading(false)
    //     }
    //     fetchPosts().catch((error: any) => {
    //         setIsLoading(false);
    //         setHttpError(error.message);
    //     })
    // }, []);

    // if (isLoading) {
    //     return (
    //         <div>
    //             <div className="nav-spacer"></div>
    //             <div className="container m-5">
    //                 <p>Loading...</p>
    //             </div>
    //         </div>
    //     )
    // }

    // if (httpError) {
    //     return (
    //         <div>
    //             <div className="nav-spacer"></div>
    //             <div className="container m-5">
    //                 <p>{httpError}</p>
    //             </div>
    //         </div>
    //     )
    // }