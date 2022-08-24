import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface Selected {
  produto: string;
  count: number;
  filter: any;
}

const initialState = {
  count: 0
} as Selected;

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addCartCountUnit: (state: Selected, { payload }: PayloadAction<string>) => {
      if (state.produto !== payload) state.count += 1;
    },
    removeSelected(state: Selected, { payload }: PayloadAction<string>) {
      return state.filter(({ produto }: Selected) => produto !== payload);
    }
  }
});

export default filterSlice.reducer;

export const selectUnitCount = (state: RootState) => state.filter.count;

export const { addCartCountUnit, removeSelected } = filterSlice.actions;
// export const useSelected = (state: any) => {
//   return state.selected as Selected[];
// };
