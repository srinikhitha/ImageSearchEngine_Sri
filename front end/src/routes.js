import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AuthenticatedLayout from "./layout/AuthenticatedLayout";
import RouteWithSubRoutes from "./RouteWithSubRoutes";

const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Search = lazy(() => import("./pages/Search"));
const AdvancedSearch = lazy(() => import("./pages/AdvancedSearch"));
const Saved = lazy(() => import("./pages/Saved"));
const Forgot = lazy(() => import("./pages/forgot"));

const LoginRedirect = () => <Redirect to="/Login" />;

const routes = [
  {
    path: "/",
    component: LoginRedirect,
  },
  {
    path: "/Login",
    component: Login,
  },
  {
    path: "/SignUp",
    component: Signup,
  },
  {
    path: "/forgot",
    component: Forgot,
  },
];

const authenticatedRoutes = [
  {
    path: "/Search",
    component: Search,
  },
  {
    path: "/AdvancedSearch",
    component: AdvancedSearch,
  },
  {
    path: "/favourites",
    component: Saved,
  }
];

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("userId")) {
      setIsLoggedIn(true)
    }
  }, [])
  return (
    <Router>
      {!isLoggedIn ? (
        <MainLayout>
          <Suspense fallback={<div className="lazy-loading">Loading...</div>}>
            {routes.map((route, i) => (
              <RouteWithSubRoutes
                setIsLoggedIn={setIsLoggedIn}
                key={i}
                {...route}
              />
            ))}
          </Suspense>
        </MainLayout>
      ) : (
        <AuthenticatedLayout>
          <Suspense fallback={<div className="lazy-loading">Loading...</div>}>
            {authenticatedRoutes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Suspense>
        </AuthenticatedLayout>
      )}
      {/* <AuthenticatedLayout>
        <Suspense fallback={<div className="lazy-loading">Loading...</div>}>
          {authenticatedRoutes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Suspense>
      </AuthenticatedLayout> */}
    </Router>
  );
};

export default AppRouter;
