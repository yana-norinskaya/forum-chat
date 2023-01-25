import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IComment, CurrentUser} from "../../interface/message";

export const messagesApi = createApi({
    reducerPath: "messages/api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/"
    }),
    tagTypes: ['Comment'],
    endpoints: build => ({
        getMessages: build.query<IComment[], string>({
            query: (way: string) => ({
               url: `${way}`
            }),
            providesTags: ["Comment"]
        }),
        getMessageById: build.mutation<IComment, IComment>({
            query: (reply) => ({
                url: `/comments/${reply.id}`,
                method: "PUT",
                body: reply
            }),
            invalidatesTags: ["Comment"]
        }),
        getCurrentUser: build.query<CurrentUser, string>({
            query: (way: string) => ({
                url: `${way}`
            })
        }),
        addReply: build.mutation<IComment, IComment>({
                query: (comment) => ({
                    url: `/comments/${comment.id}`,
                    method: "PUT",
                    body: comment
                    }),
                invalidatesTags: ["Comment"]
        }),
        deleteComment: build.mutation<IComment, string>({
            query: id => ({
                url: `/comments/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Comment"]
        }),
        addComment: build.mutation<IComment[], IComment>({
            query: comment => ({
                url: "/comments",
                method: "POST",
                body: comment
            }),
            invalidatesTags: ["Comment"]
        })
    })
})

export const {
    useGetMessagesQuery,
    useGetCurrentUserQuery,
    useAddReplyMutation,
    useDeleteCommentMutation,
    useAddCommentMutation,
    useGetMessageByIdMutation} = messagesApi;