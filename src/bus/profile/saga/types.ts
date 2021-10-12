
export const POST_USER = 'POST_USER';
export type PostUserContract = (payload: string) => {
    type: typeof POST_USER
    payload: string
}


export const GET_USER = 'GET_USER';
export type GetUserContract = (payload: string) => {
    type: typeof GET_USER
    payload: string
}
