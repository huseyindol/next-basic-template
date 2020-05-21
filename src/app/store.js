import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./slice";
import counterReducer from "../features/Counter/slice";

export default configureStore({
  reducer: {
    main: mainReducer,
    counter: counterReducer,
  },
});
