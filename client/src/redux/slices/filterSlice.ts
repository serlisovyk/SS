import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    limit: 3,
  },
  reducers: {
    setLimit(state, { payload }: PayloadAction<number>) {
      state.limit = payload
    },
  },
})

export const selectFilter = (state: RootState) => state.filter

export const { actions: filterActions } = filterSlice
export default filterSlice.reducer
