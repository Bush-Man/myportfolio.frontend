export  const authReducer = (state, action) => {
    switch (action.type) {
        
        case "LOGIN_START":
            return {
                ...state,
                
                isFetching: true,
               
                

            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                user: action.payload,
                
            };
            
        case "LOGIN_FAILURE":
            return {
                ...state,
               
                error: true,
                
            };
        case "CHANGE_THEME":
            return {
                ...state,
                light: false,
                dark: action.payload
            };
        
        default:
            return state
    }
}