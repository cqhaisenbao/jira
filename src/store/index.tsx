import { configureStore } from "@reduxjs/toolkit";
import projectListReducer from "../screens/project-list/projectList.slice";

export const store = configureStore({
  reducer: {
    projectList: projectListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
