import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./utils/authContext";
import LandingPage from "./pages/landing/landingPage";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import PageNotImplemented from "./pages/pageEmpty";
import CommonHeader from "@/Components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Feed from "./pages/feed";


const BlankLayout = () => {
  return (
    <>
      <CommonHeader />
      <main>
        <Outlet />
        <ToastContainer />
      </main>
    </>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BlankLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/feed",
          element: <Feed />,
        },
        {
          path: "*",
          element: <PageNotImplemented />,
        },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
