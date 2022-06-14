import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import pathnameReducer from '../features/pathname/Pathname';
import newsReducer from "../features/newsapi/newsSlice"


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pathname: pathnameReducer,
    news: newsReducer,
  },
});
