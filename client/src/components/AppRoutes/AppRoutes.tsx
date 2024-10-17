import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Catalog from '../../pages/Catalog/Catalog'
import { ROUTES } from '../../utils/constants'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.CATALOG} element={<Catalog />} />
    </Routes>
  )
}
