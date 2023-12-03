import {configureStore} from '@reduxjs/toolkit';

// middleware
import middlewareArray from './middleware';

// root reducers
import rootReducer from './rootReducers';

export const store = configureStore({
  reducer: rootReducer,
  middleware: defaultMiddleware =>
    defaultMiddleware({
      serializableCheck: false,
    }).concat(middlewareArray),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
