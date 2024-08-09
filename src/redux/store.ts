import { persistStore, persistReducer } from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSensitiveStorage from "redux-persist-sensitive-storage";
import {authReducer} from "redux/slices/auth.slice";

const storage = createSensitiveStorage({
  keychainService: "myKeychain",
  sharedPreferencesName: "mySharedPrefs"
});

const persistedReducer = persistReducer<any>({
  key: "root",
  storage: storage,
  whitelist: ['auth'],
}, combineReducers({
  auth: authReducer,
}));

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false
    })
});

export const persistor = persistStore(store);
