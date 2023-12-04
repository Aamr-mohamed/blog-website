import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Contact, Home, Login, NewPost, Profile, Signup } from "./pages";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Slide } from "react-toastify";
import authReducer from "./store/store";
import { configureStore } from "@reduxjs/toolkit";
import { Provider, useSelector } from "react-redux";
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
import { PersistGate } from "redux-persist/integration/react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "./theme.js";

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
  const mode = useSelector((state) => state.mode);
  const isAuth = Boolean(useSelector((state) => state.token));
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route exact path="/login" element={<Login />} />
        <Route
          path="/Home"
          element={isAuth ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile/:userId"
          element={isAuth ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>
    </ThemeProvider>
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
