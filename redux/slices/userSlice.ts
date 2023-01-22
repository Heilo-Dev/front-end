import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  value: string | null | undefined;
}

const initialState: UserState = {
  value: "Hello World",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserSessionInfo: (
      state,
      action: PayloadAction<string | null | undefined>
    ) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUserSessionInfo } = userSlice.actions;

export default userSlice.reducer;
