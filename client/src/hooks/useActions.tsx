import { useMemo } from 'react'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'

const useAppDispatch = useDispatch.withTypes<AppDispatch>()

const rootActions = {}

export default function useActions() {
  const dispatch = useAppDispatch()

  return useMemo(() => {
    return bindActionCreators(rootActions, dispatch)
  }, [dispatch])
}
