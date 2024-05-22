import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ProductsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl:'http://localhost:3000' }),
  endpoints: (builder) => ({
    getProductsByName: builder.query({
      query: () => "/products",
    }),
    deleteOne:builder.mutation({
        query: (_id)=>({
            url: `/products/${_id}`
        })
    }),
    postOne:builder.mutation({
        query:(newProduct)=>({
            url:"/products",
            method: "POST",
            body: newProduct,
            headers:{
                'Content-type':'application/json'
            }
        })
    })
  }),
})

export const { useGetProductsByNameQuery, useDeleteOneMutation,usePostOneMutation } = ProductsApi