import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../utils/constants'
import { IFilter, IProduct, IProductsInfo } from '../../types/types'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    getProducts: builder.query<IProductsInfo, IFilter>({
      query: ({ limit = 3, sortBy = 'price_asc' }) => {
        const params: Record<string, any> = {}

        if (limit) params.limit = limit

        return {
          url: '/products',
          params,
        }
      },
    }),
    getSingleProduct: builder.query<IProduct, string>({
      query: id => `/products/${id}`,
    }),
  }),
})

export const { useGetProductsQuery, useGetSingleProductQuery } = productsApi
