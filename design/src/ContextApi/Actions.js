export const loginStart = (userDetails) => ({
    type: "LOGIN_START"
    
})
export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user
    
})
export const loginFailure = () => ({
    type: "LOGIN_FAILURE",
    
    
})

export const darkTheme = (isDark) => ({
    type: "CHANGE_THEME",
    payload:isDark
})
