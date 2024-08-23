import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    // 权限按钮
    authButtons: {
        [propName: string]: any
    };
    // 权限路由
    authRouter: string[];
}

const authState: AuthState = {
    authButtons: {},
    authRouter: []
};

const authSlice = createSlice({
    name: "auth",
    initialState: authState,
    reducers: {
        setAuthButtons(state: AuthState, { payload }: PayloadAction<{ [propName: string]: any }>) {
            state.authButtons = payload;
        },
        setAuthRouter(state: AuthState, { payload }: PayloadAction<string[]>) {
            state.authRouter = payload;
        }
    }
});

export const { setAuthButtons, setAuthRouter } = authSlice.actions;

export default authSlice.reducer;
