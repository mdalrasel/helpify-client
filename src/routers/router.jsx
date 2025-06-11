import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import SignIn from "../pages/authentication/SignIn";
import Register from "../pages/authentication/Register";
import ErrorPage from "../pages/errorPage/ErrorPage";
import AllPost from "../components/AllPost";
import Deshboard from "../components/Deshboard";
import AddService from "../pages/service/AddService";
import Details from "../components/Details";
import ManageServices from "../components/ManageServices";
import PrivateRoute from "./PrivateRoute";
import UpdateService from "../components/UpdateService";


export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    Component: MainLayout,
    children: [
      {
        index: true,
        path: '/',
        Component: Home
      },
      {
        path: '/signIn',
        Component: SignIn
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'allPost',
        Component: AllPost
      },
      {
        path: 'add-service',
        element: <PrivateRoute><AddService /></PrivateRoute>
      },
      {
        path: '/details/:id',
        Component: Details
      },
      {
        path: '/manage-services',
        element: <PrivateRoute><ManageServices /></PrivateRoute>
      },
      {
        path: '/update-service/:id',
        element: <PrivateRoute><UpdateService /></PrivateRoute> 
      }
    ]
  },
]);