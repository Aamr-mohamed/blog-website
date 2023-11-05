import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Contact, Root, Login, NewPost, Profile, Signup } from "./pages";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Slide } from "react-toastify";
import { Provider } from "react-redux";
import storage from "redux-persist/lib/storage";
import authReducer from "./state";
import { PersistGate } from "redux-persist/integration/react";
import {
  PURGE,
  PAUSE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  FLUSH,
  persistStore,
  persistReducer,
} from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default function App() {
  return (
    <Routes>
      <Route exact path="/" Component={Root} />
      <Route path="/login" Component={Login} />
      <Route path="/signup" Component={Signup} />
      <Route path="/new-post" Component={NewPost} />
      <Route path="/contact" Component={Contact} />
      <Route path="/profile" Component={Profile} />
    </Routes>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <BrowserRouter>
        <ToastContainer transition={Slide} />
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
