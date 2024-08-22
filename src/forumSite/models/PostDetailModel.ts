import ResponseDTO from "./ResponseDTO";
import User from "./User";

class PostDetailModel {
    roomId: number;
    postId: number;
    posterId: number;
    postTitle: string;
    postText: String;
    origPostDate: Date;
    lastResponseDate: Date;
    numberOfResponses: number;
    responses: ResponseDTO[];
    user: User

    constructor(roomId: number,
        postId: number,
        posterId: number,
        postTitle: string,
        postText: String,
        origPostDate: Date,
        lastResponseDate: Date,
        numberOfResponses: number,
        userFirstName: string,
        userLastName: string) {
            this.roomId = roomId
            this.postId = postId;
            this.postTitle = postTitle;
            this.posterId = posterId;
            this.postText = postText;
            this.origPostDate = origPostDate;
            this.lastResponseDate = lastResponseDate;
            this.numberOfResponses = numberOfResponses;
            this.responses = []
            this.user = new User(posterId, userFirstName, userLastName)
    }
}

export default PostDetailModel