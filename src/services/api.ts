import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Defina o tipo dos dados que serão retornados, por exemplo:
interface Jogo {
  id: number
  nome: string
  descricao: string
  preco: number
  imagem: string
}

const api = createApi({
  reducerPath: 'api', // Defina um caminho para o reducer
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/ebac_sports'
  }),
  endpoints: (builder) => ({
    getJogos: builder.query<Jogo[], void>({
      query: () => ''
    })
  })
})

export const { useGetJogosQuery } = api
export default api
