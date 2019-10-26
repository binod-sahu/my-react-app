import React from "react";

export const ChatMessageListItem = ({ item }) => (
    <div>
        <div>Message ID : {item.messageId}</div>
        <div>User ID : {item.userId}</div>
        <div>Customer Name : {item.fullName}</div>
        <div>Time : {item.timestamp}</div>
        <div>Email : {item.email}</div>
        <div>Message : {item.message}</div>
        <img src={item.avatar} role="presentation" />
    </div>
);

export const ChatMessageList = (props) => (
    <div>
        {props.list.map((item) => (
            <ChatMessageListItem key={item.userId} item={item} {...props}></ChatMessageListItem>
        )
        )}
    </div>
)
