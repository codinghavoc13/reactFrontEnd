class Room{
    roomId: number;
    roomTitle: string;
    roomDescription: string;

    constructor(
        roomId: number,
        roomTitle: string,
        roomDescription: string,){
            this.roomId = roomId;
            this.roomTitle = roomTitle;
            this.roomDescription = roomDescription;
    }
} export default Room