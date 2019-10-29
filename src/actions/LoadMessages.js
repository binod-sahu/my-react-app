import { getMessages } from "../data";

export default function LoadMessages() {

    return (dispatch) => {
        getMessages().then((data) => {
            dispatch({
                type: "MESSAGES_RECEIVED",
                payload: data
            })
        }).catch((err) => {
            console.log("error: ", err);
        })
    }
};