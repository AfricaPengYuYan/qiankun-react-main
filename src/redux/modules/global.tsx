import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GlobalState {
    token: string;
}


const globalState: GlobalState = {
    token: "",
};

const globalSlice = createSlice({
    name: "global",
    initialState: globalState,
    reducers: {
        setToken(state: GlobalState, { payload }: PayloadAction<string>) {
            state.token = payload;
        },
    }
});

export const { setToken, } = globalSlice.actions;
export default globalSlice.reducer;
