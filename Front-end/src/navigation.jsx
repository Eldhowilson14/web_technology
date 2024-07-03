import React from "react";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
// ++++++++++++++++++++++++++++++++++++++++++++
import {
  AuthLayout,
  LoginForm,
  SignupForm,
  ForgotPassword,
  ForgotPasswordChange,
  IsVerified,
} from "@/components/Auth/auth.js";

import Test from "./pages/Test.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import Services from "./components/Services/Services.jsx";
import About from "./components/About/About.jsx";
import CareerServices from "./components/CareerServices/CareerServices.jsx";
import Achievements from "./components/Achievements/Achievements.jsx";
import Alumini from "./components/Alumini/Alumini.jsx";
import Contact from "./components/Contact.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Events from "./components/Events/Events.jsx";

// ################ Router ###################

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Blog />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
      {
        path: "about-us",
        element: <About />,
      },

      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/career",
        element: <CareerServices />,
      },
      {
        path: "/achievements",
        element: <Achievements />,
      },
      {
        path: "/alumini",
        element: <Alumini />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <LoginForm />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <SignupForm />
          </AuthLayout>
        ),
      },

      // ##################  Auth ##################

      {
        path: "/verifyemail",
        element: <IsVerified />,
      },
      {
        path: "/forgotpassword",
        element: <ForgotPassword />,
      },
    ],
  },
]);

export default router;
