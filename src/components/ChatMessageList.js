import React from "react";
import { changeTimestamp } from "../util/util";

const Avatar = props => (
    <div className='avatar'>
      {props.url === null
        ? <img src='default.png' role='presentation' />
        : <img src={props.url} role='presentation' />
      }
    </div>
  );

const FetchMail = email => (
    <span className='email'>{email}</span>
);

export const ChatMessageListItem = ({ item }) => (
    <div className="card">
        <Avatar url={item.avatar} />
        <div className="chat-content">
            <div><strong>Message ID :</strong> {item.messageId}</div>
            <div><strong>User ID :</strong> {item.userId}</div>
            <div><strong>Customer Name :</strong> {item.fullName}</div>
            <div><strong>Time :</strong> {changeTimestamp(item.timestamp)}</div>
            <div className='email'><strong>Email :</strong> {item.email}</div>
            <div><strong>Message :</strong> {item.message}</div>
        </div>
        
    </div>
);

export const ChatMessageList = (props) => (
    <div className="chatListContainer">
        { 
            props.list && props.list.length > 0 ?
            props.list.map((item) => (
            <ChatMessageListItem key={item.userId} item={item} {...props}></ChatMessageListItem>
        )) : <div className="loading"><h1>Loading...</h1></div>
        }
    </div>
)

