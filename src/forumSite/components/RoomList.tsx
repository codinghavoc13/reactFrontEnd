import { useEffect, useState } from "react";
import Room from "../models/Room";
import { RoomDetail } from "./RoomDetail";
import { getBaseURL } from "../utils/Utility";

export const RoomList: React.FC<{}> = () =>{
    const [rooms, setRooms] = useState<Room[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);
    
    // const location = useLocation()
    // console.log("RoomList:",location)
    //Need to add logic to get /rooms/all and build the list below
    const baseUrl = getBaseURL()
    // console.log("baseUrlTest:",baseUrl)

    useEffect(() => {
        const queryUrl: string = `${baseUrl}/rooms/all`;
        const fetchPosts = async () => {

            const response = await fetch(queryUrl);
            if (!response.ok) {
                throw new Error('Something went wrong')
            }
            const responseJson = await response.json();
            // console.log(responseJson)
            const rooms: Room[] = []
            for (let i: number = 0; i < responseJson.length; i++) {
                rooms.push({
                    roomId: responseJson[i].room_id,
                    roomTitle: responseJson[i].room_title,
                    roomDescription: responseJson[i].room_description,
                })
            }
            // console.log(rooms)
            setRooms([])
            setRooms(rooms)
            setIsLoading(false)
        }
        fetchPosts().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, []);

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
            <h1>Room List</h1>
            <hr/>
            <div className="row">
            {rooms.map((room)=>{
                return <RoomDetail key={room.roomId} room={room}/>
            })}
            </div>
        </div>
    )
}