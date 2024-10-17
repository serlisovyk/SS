import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { ISort } from '../../types/types'

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    limit: 3,
    sort: { name: 'Цена по убыванию', sortProperty: 'price_asc' } as ISort,
  },
  reducers: {
    setLimit(state, { payload }: PayloadAction<number>) {
      state.limit = payload
    },
    setSort(state, { payload }: PayloadAction<ISort>) {
      state.sort = payload
    },
  },
})

export const selectFilter = (state: RootState) => state.filter

export const { actions: filterActions } = filterSlice
export default filterSlice.reducer
