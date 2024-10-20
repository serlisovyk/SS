export interface ISliderHeadingProps {
  title: string
  onPrevClick: () => void
  onNextClick: () => void
}

export interface ISort {
  name: string
  sortProperty: string
}

export interface IProduct {
  _id: string
  title: string
  price: number
  description: string
  images: string[]
  isCart: boolean
  isFavourite: boolean
  saleCF?: number
  oldPrice?: number
  colors: { name: string; hex: string }[]
  sizes: number[]
  material: string
}

export interface IProductsInfo {
  products: IProduct[]
  total: number
  page: number
  limit: number
}

export interface IFilter {
  limit?: number
  color?: { name: string; hex: string }
  size?: number
  sortBy?: string
  material?: string
  price_min?: number
  price_max?: number
  search?: string
  category?: string
  page?: number
}
