import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const key = process.env.REACT_APP_NEWS_API;

const date = new Date()

const nowDate = date.getFullYear() + '-' + ( date.getMonth() + 1 ) + '-' + date.getDate()



export const fetchArticles = createAsyncThunk("news/fetchArticles", async () => {
    const res = await fetch("https://newsapi.org/v2/everything?q=Apple&from=" + nowDate + "&sortBy=popularity&apiKey=" + key, 
    { method: "GET" })
    const data = await res.json()
    return data.articles
 })
 


export const news = createSlice({
    name: 'news',
    initialState: {
        articleList: '/',
        status: 'idle',
        error: null
    },
    reducers: {
        newsStore: (state, action) => {
            state.articleList = action.payload
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchArticles.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.status = 'success'
                state.articleList = action.payload
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.status = "rejected"
                state.error = action.error.message
            })
    }
})

export const { newsStore } = news.actions

export default news.reducer

export const allArticles = state => state.news.articleList

export const articleStatus = state => state.news.status




/*import { createSlice } from "@reduxjs/toolkit";

export const news = createSlice({
    name: 'news',
    initialState: {
        value: '/',
    },
    reducers: {
        newsStore: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { newsStore } = news.actions

export default news.reducer*/