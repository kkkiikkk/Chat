
export const FILL_MESSAGE = 'FILL_MESSAGE';
export type GetMessagesContract = () => {
    type: typeof FILL_MESSAGE
}


export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export type PostMessagesContract = (payload: {text: string, username: string}) => {
    type: typeof CREATE_MESSAGE
    payload: {text: string, username: string}
}
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export type DeleteMessageContract = (payload: {_id: string}) => {
    type: typeof DELETE_MESSAGE,
    payload: {_id: string}
}
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export type UpdateMessageContract = (payload: {text: string, _id: string}) => {
    type: typeof UPDATE_MESSAGE,
    payload: {text: string, _id: string}
}
