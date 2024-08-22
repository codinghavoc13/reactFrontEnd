import User from "./User";

class ResponseDTO{
    responseId: number;
    userId: number;
    postId: number;
    responseText: string;
    responseDate: Date;
    user: User;

    constructor(responseId: number,
        userId: number,
        postId: number,
        responseText: string,
        responseDate: Date,
        userFirstName: string,
        userLastName: string){
            this.responseId = responseId;
            this.userId = userId;
            this.postId = postId;
            this.responseText = responseText;
            this.responseDate = responseDate;
            this.user = new User(userId,
                userFirstName,
                userLastName
            )
        }
}

export default ResponseDTO