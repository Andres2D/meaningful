import { configureStore } from '@reduxjs/toolkit';
import meaningSlice from './meaning-slice';

const store = configureStore({
  reducer: {
    meaning: meaningSlice
  }
});

export default store;
