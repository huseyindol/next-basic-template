import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './slice';
import counterReducer from '../components/Counter/slice';

export default configureStore({
  reducer: {
    main: mainReducer,
    counter: counterReducer,
  },
});
