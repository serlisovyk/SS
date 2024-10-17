import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Catalog from '../../pages/Catalog/Catalog'
import { ROUTES } from '../../utils/constants'
import About from '../../pages/About/About'
import Blog from '../../pages/Blog/Blog'
import Delivery from '../../pages/Delivery/Delivery'
import Payment from '../../pages/Payment/Payment'
import Contacts from '../../pages/Contacts/Contacts'
import IndividualOrder from '../../pages/IndividualOrder/IndividualOrder'
import NotFound from '../../pages/NotFound/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.CATALOG} element={<Catalog />} />
      <Route path={ROUTES.ABOUT} element={<About />} />
      <Route path={ROUTES.BLOG} element={<Blog />} />
      <Route path={ROUTES.DELIVERY} element={<Delivery />} />
      <Route path={ROUTES.PAYMENT} element={<Payment />} />
      <Route path={ROUTES.CONTACTS} element={<Contacts />} />
      <Route path={ROUTES.INDIVIDUAL_ORDER} element={<IndividualOrder />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
