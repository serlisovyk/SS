import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import { ROUTES } from '../../utils/utils'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
    </Routes>
  )
}
