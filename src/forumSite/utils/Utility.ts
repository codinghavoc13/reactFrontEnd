export function convertDate(date: Date) {
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

export function getBaseURL(){
    if(process.env.NODE_ENV==='production'){
        //production
        return "https://monolithbackend-74629fdb83e0.herokuapp.com"
    } else {
        //development
        return "http://localhost:8181"
    }
}