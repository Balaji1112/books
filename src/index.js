import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Books from "./views/Books";
import AddBooks from "./views/AddBooks";
import EditBooks from "./views/EditBooks";
import Header from "./components/Header";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import booksSlice from "./redux/booksSlice";

const store = configureStore({
  reducer: {
    books: booksSlice,
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Books />,
  },
  {
    path: "books",
    element: <Books />,
  },
  {
    path: "addbooks",
    element: <AddBooks />,
  },
  {
    path: "editbooks/:id",
    element: <EditBooks />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
