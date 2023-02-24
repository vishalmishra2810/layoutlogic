import { createSlice } from "@reduxjs/toolkit";


export interface EditorState {
  fontSize: number;
  tabSize: number;
  theme: string;
  codeSuggestions: boolean;
}

const initialState: EditorState = {
  fontSize: 14,
  tabSize: 4,
  theme: "monokai",
  codeSuggestions: true,
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setGlobalFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
    setGlobalTabSize: (state, action) => {
      state.tabSize = action.payload;
    },
    setGlobalTheme: (state, action) => {
      state.theme = action.payload;
    },
    setGlobalCodeSuggestions: (state, action) => {
      state.codeSuggestions = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setGlobalFontSize,
  setGlobalTabSize,
  setGlobalTheme,
  setGlobalCodeSuggestions,
} = editorSlice.actions;

export default editorSlice.reducer;
