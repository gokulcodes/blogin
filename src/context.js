import React from 'react'
import jsonServer from './api/jsonServer'
const BlogContext = React.createContext()

const blogReducer = (state, action) => {
    switch(action.type){
        case "BLOG_POST":
            return action.payload
        case 'ADD_BLOG':
            return [...state, {id: Math.floor(Math.random() * 5000).toString(), title: action.payload.title, content: action.payload.content}];
        case 'DELETE_BLOG':
            return state.filter(state => state.id != action.payload)
        case 'EDIT_BLOG':
            return state.map(blog => {
                return blog.id === action.payload.id ? action.payload : blog
        })
    }
}

export const BlogProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(blogReducer, [])

    const getBlogPost = async () => {
        const response = await jsonServer.get('/blogPost')
        dispatch({type: "BLOG_POST", payload: response.data})
    }   

    const addBlogPost = async (title, content, callback) => {
        await jsonServer.post('/blogPost', { title, content})
        // dispatch({type: 'ADD_BLOG', payload: {title: title, content: content}})
        if(callback){
            callback()
        }
    }
    const deleteBlogPost = async (e) => {
        await jsonServer.delete(`/blogPost/${e}`)
        dispatch({type: 'DELETE_BLOG', payload: e})
    }
    const editBlogPost = async (id, title, content, callback) => {
        await jsonServer.put(`/blogPost/${id}`, {title, content})
        dispatch({type: 'EDIT_BLOG', payload: {id, title, content}})
        if(callback){
            callback()
        }
    }
    return <BlogContext.Provider value={{data: state, addBlogPost, deleteBlogPost, editBlogPost, getBlogPost}}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext