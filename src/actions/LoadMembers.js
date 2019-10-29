import { getMembers } from "../data";

export default function LoadMembers() {
    return (dispatch) => {
        getMembers().then((data) => {
            dispatch({
                type: "MEMBERS_RECEIVED",
                payload: data
            })
        }).catch((err) => {
            console.log("error: ", err);
        })
    }
};