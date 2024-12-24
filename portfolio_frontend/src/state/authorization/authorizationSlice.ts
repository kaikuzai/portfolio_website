import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Authorization {
    isAuthenticated: boolean, 
    userName: string | null,
    role: string | null, 
};

interface AuthorizationResponse { 
    userName: string, 
    role: string,
}

const initialState: Authorization = {
    isAuthenticated: false, 
    userName:  null, 
    role: null
}

const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        setAuthorizationLogin: (state, action: PayloadAction<AuthorizationResponse>) => {
            state.isAuthenticated = true, 
            state.userName = action.payload.userName, 
            state.role = action.payload.role
        },
        setAuthorizationLogout: (state) => {
            state = {
                ...initialState
            }
        },
    }
});

export const { setAuthorizationLogin, setAuthorizationLogout } = authorizationSlice.actions;
export default authorizationSlice.reducer; 

