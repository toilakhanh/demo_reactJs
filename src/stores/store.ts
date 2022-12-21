import { configureStore } from "@reduxjs/toolkit";
import demoRedicer from "./reducer/reducer";
export const store = configureStore({
  reducer: {
    demo: demoRedicer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
