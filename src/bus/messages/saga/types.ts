
export const FILL_MESSAGE = 'FILL_MESSAGE';
export type GetMessagesContract = () => {
    type: typeof FILL_MESSAGE
}


export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export type PostMessagesContract = (payload: {text: string, username: string}) => {
    type: typeof CREATE_MESSAGE
    payload: {text: string, username: string}
}
