import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import LogIn from "./components/logIn/LogIn";
import User from "./pages/User";
import VideoPage from "./pages/VideoPage";
import SignUp from "./components/signUp/SignUp";
import UploadVideo from "./components/uploadVideo/UploadVideo";
import store from "./redux-toolkit/store/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/video",
        element: <VideoPage />,
      },
      {
        path: "/uploadVideo",
        element: <UploadVideo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
