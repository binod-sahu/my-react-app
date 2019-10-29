const initialState = {
    members: [],
    isLoading: true,
}

export default function MembersReducer(state = initialState, action) {
    if (action.type === "MEMBERS_RECEIVED") {
        let members = [];

        action.payload.map((member) => {
            members.push({
                id: member.id,
                firstName: member.firstName,
                lastName: member.lastName,
                email: member.email,
                avatar: member.avatar,
                ip: member.ip
            })
        });

        return { ...state, members: members, isLoading: false };
    } else {
        return state;
    }
}