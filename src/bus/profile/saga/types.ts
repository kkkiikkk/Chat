
export const REGISTER_USER = 'REAGISTER_USER';
export type PostUserContract = (payload: string) => {
    type: typeof REGISTER_USER
    payload: string
}


export const FILL_USER_PROFILE = 'FILL_USER_PROFILE';
export type GetUserContract = (payload: string) => {
    type: typeof FILL_USER_PROFILE
    payload: string
}
