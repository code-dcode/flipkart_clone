import { applyMiddleware, createStore } from "redux";
import rootReducer from "./redux/ReduxMain";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
    key: "reducer",
    storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware());
const persistor = persistStore(store);
// persistor.purge();

export { persistor, store };