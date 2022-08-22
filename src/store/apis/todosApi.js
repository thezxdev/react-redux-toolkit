import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  
  // Nombre del "reducer" (RTK)
  reducerPath: 'todos',
  // URL
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),

  // Funciones / peticiones
  endpoints: ( builder ) => ({
    getTodos: builder.query({
      query: () => '/todos'
    }),
    getTodo: builder.query({
      query: ( todoId ) => `/todos/${ todoId }`
    }),
  })

})

export const { useGetTodosQuery, useGetTodoQuery } = todosApi; // Custom hook