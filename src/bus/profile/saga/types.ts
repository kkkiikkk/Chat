
export const REGISTER_PROFILE = 'REAGISTER_USER';
export type PostRegisterContract = (payload: string) => {
    type: typeof REGISTER_PROFILE
    payload: string
}


export const REFRESH_PROFILE = 'FILL_USER_PROFILE';
export type GetRefreshContract = (payload: string) => {
    type: typeof REFRESH_PROFILE
    payload: string
}
