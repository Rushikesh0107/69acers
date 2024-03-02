const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const authEndpoints  = {
    LOGIN_API: BASE_URL + '/user/login',
    REGISTER_API: BASE_URL + '/user/signup',
    LOGOUT_API: BASE_URL + '/user/logout',
}