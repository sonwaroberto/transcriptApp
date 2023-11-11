// store.ts
import {configureStore} from '@reduxjs/toolkit';
import middlewareArray from './middleware';

export const store = configureStore({
  reducer: {},
  middleware: defaultMiddleware =>
    defaultMiddleware({
      serializableCheck: false,
    }).concat(middlewareArray),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
