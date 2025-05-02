import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../features/productSlice'
import  wishlistSlice  from '../features/wishlistSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 


const persistConfig={
  key:"wishlist",
  storage
};
const productPersistConfig = {
  key: 'products',
  storage,
};

const persistWishlistReducer=persistReducer(persistConfig,wishlistSlice);
const persistProductReducer=persistReducer(productPersistConfig,productSlice)




export const store = configureStore({
  reducer: {products: persistProductReducer, wishlist:persistWishlistReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/PAUSE',
          'persist/FLUSH',
          'persist/PURGE',
          'persist/REGISTER',
        ],
        ignoredPaths: ['register', 'rehydrate'],
      },
    }),
});

export const persistor = persistStore(store);