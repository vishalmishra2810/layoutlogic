import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const selectQuestionSlice = createSlice({
  name: "counter",
  initialState: {
    selectedQuestion: "",
  },
  reducers: {
    selectQuestion: (state, action: PayloadAction<string>) => {
      state.selectedQuestion = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const selectQuestionActions = selectQuestionSlice.actions;
export default selectQuestionSlice.reducer;
