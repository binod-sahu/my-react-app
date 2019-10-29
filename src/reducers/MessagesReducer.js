const initialState = {
    messages: [],
    isLoading: true,
}

export default function MessagesReducer(state = initialState, action) {
    if (action.type === "MESSAGES_RECEIVED") {
        let messages = [];
        action.payload.map((message) => {
            messages.push({
                id: message.id,
                userId: message.userId,
                message: message.message,
                timestamp: message.timestamp,
            })
        });

        return { ...state, messages: messages, isLoading: false };
    } else {
        return state;
    }
}