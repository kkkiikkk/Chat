
export const GET_MESSAGES = 'GET_MESSAGES';
export type GetMessagesContract = () => {
    type: typeof GET_MESSAGES
}


export const POST_MESSAGES = 'POST_MESSAGES';
export type PostMessagesContract = (payload: {text: string, username: string}) => {
    type: typeof POST_MESSAGES
    payload: {text: string, username: string}
}
