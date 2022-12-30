import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Kanban from "./pages/Kanban";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Auth from "./components/Auth";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/kanban",
                element: <Kanban />,
            },
            {
                path: "/login",
                element: <Auth />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
