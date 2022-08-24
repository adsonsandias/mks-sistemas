import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Selected {
  produto: string;
  removed: boolean;
}

const INITIAL_STATE: Selected[] = [];

const selectedSlice = createSlice({
  name: "selected",
  initialState: INITIAL_STATE,
  reducers: {
    addSelected(state: Selected[], { payload }: PayloadAction<string>) {
      return [...state, { produto: payload, removed: false }];
    },
    removeSelected(state: Selected[], { payload }: PayloadAction<string>) {
      return state.filter(({ produto }) => produto !== payload);
    }
  }
});

export default selectedSlice.reducer;

export const { addSelected, removeSelected } = selectedSlice.actions;
export const useSelected = (state: any) => {
  return state.selected as Selected[];
};
