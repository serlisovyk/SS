import { useMemo } from 'react'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { filterActions } from '../redux/slices/filterSlice'

const useAppDispatch = useDispatch.withTypes<AppDispatch>()

const rootActions = {
  ...filterActions,
}

export default function useActions() {
  const dispatch = useAppDispatch()

  return useMemo(() => {
    return bindActionCreators(rootActions, dispatch)
  }, [dispatch])
}
