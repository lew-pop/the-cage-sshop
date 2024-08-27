import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cageApi } from "./services/cageApi";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./slices/user-slice";
import productReducer from "./slices/product-slice";
import currencyReducer from "./slices/currency-slice";
import cartReducer from "./slices/cart-slice";
import compareReducer from "./slices/compare-slice";
import wishlistReducer from "./slices/wishlist-slice";

const persistConfig = {
  key: "cage",
  version: 1.1,
  storage,
  blacklist: ["product", cageApi.reducerPath],
};

export const rootReducer = combineReducers({
  product: productReducer,
  currency: currencyReducer,
  cart: cartReducer,
  compare: compareReducer,
  wishlist: wishlistReducer,
  userLogin: userReducer,
  [cageApi.reducerPath]: cageApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(cageApi.middleware),
});
export const persistor = persistStore(store);
