import React from "react";
import { mergeChatdataById } from "../services/service"
import { changeTimestamp, getSortedData } from "../util/util";

const Avatar = props => (
    <div className='avatar'>
        {props.url === null
            ? <img src='default.png' role='presentation' />
            : <img src={props.url} role='presentation' />
        }
    </div>
);


const Card = ({ avatar, messageId, userId, fullName, timestamp, email, message }) => (
    <div className="card">
        <Avatar url={avatar} />
        <div className="chat-content">
            <div><strong>Message ID :</strong> {messageId}</div>
            <div><strong>User ID :</strong> {userId}</div>
            <div><strong>Customer Name :</strong> {fullName}</div>
            <div><strong>Time :</strong> {changeTimestamp(timestamp)}</div>
            <div className='email'><strong>Email :</strong> {email}</div>
            <div><strong>Message :</strong> {message}</div>
        </div>
    </div>
)
const ChatMessageListItem = ({ messages, members }) => {

    const chatData = mergeChatdataById(messages, members);
    const chatDatawithSorting = getSortedData(chatData);
    return (
        <ul>
            {chatDatawithSorting.map(item => {
                return (

                    <Card
                        key={item.userId}
                        avatar={item.avatar}
                        messageId={item.messageId}
                        userId={item.userId}
                        fullName={item.fullName}
                        timestamp={item.timestamp}
                        email={item.email}
                        message={item.message}
                    />
                )
            })}
        </ul>
    );
};

export const ChatMessageList = (props) => {
    return (
        <div className="chatListContainer">
            {
                props.members.length > 0 && props.messages.length > 0 ?
                    <ChatMessageListItem {...props}></ChatMessageListItem>
                    : <div className="loading"><h1>Loading...</h1></div>
            }
        </div>
    )
}

