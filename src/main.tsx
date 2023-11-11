import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import ErrorPage from "./error-page";
import Home from "./routes/home";
import Settings from "./routes/settings";
import Profile from "./routes/profile";
import FAQ from "./routes/FAQ";
import { TauriProvider } from "./context/TauriProvider";
import "./styles.css";
import { SettingsProvider } from "./context/SettingsProvider";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TauriProvider>
      <Provider store={store}>
        <SettingsProvider>
          <RouterProvider router={router} />
        </SettingsProvider>
      </Provider>
    </TauriProvider>
  </React.StrictMode>
);
