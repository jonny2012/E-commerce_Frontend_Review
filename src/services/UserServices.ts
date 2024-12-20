import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export interface User {
    id: number |undefined,
    username: string | undefined,
    email: string,
    password: string
}


export const userApi = createApi({
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    endpoints: (build) => ({
        getLoginUser: build.mutation<User, Partial<User>>({
            query: (body) => ({
                url: "/user/login",
                method: "POST",
                body
            }),
        },

        ),
        checkAuth: build.query({
            query: (token) => ({
                url: "/user/auth",
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }),

        registerUser: build.mutation<User, Partial<User>>({
            query:(body) =>({
                url:"/user/register",
                method:"POST",
                body
            })

        })

    })

})


