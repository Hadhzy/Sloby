export const reducer = (state, action) => {
    if(action.type === "ADD_ITEM") {
        const newConversation = [...state.conversations, action.payload]
        return {
            ...state, 
            conversations: newConversation,
            isModalOpen: false
        }
    }
}