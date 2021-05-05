import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, PersistConfig } from 'redux-persist';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import weatherSlice from './weather/weatherSlice';

const persistConfig : PersistConfig<any> = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  weather: weatherSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});
export type AppDispatch = typeof store.dispatch;
export default store;
