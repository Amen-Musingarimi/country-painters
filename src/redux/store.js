import { configureStore } from '@reduxjs/toolkit';
import NavBarReducer from './navBarSlice';

const store = configureStore({
  reducer: {
    nav: NavBarReducer,
  },
});

export default store;
