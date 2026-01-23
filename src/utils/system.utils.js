
// set tokens in localstorage
export const setTokens = (
    {
        accessToken = "",
        refreshToken = ""
    }
) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
};

// get tokens from localstorage
export const getTokens = () => {
    return {
        accessToken: localStorage.getItem('accessToken') || null,
        refreshToken: localStorage.getItem('refreshToken') || null
    };
}

// clear tokens from localstorage
export const clearTokens = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
}