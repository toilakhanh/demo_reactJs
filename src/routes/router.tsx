import { Fragment, useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import MobileLayout from "../components/layouts/mobile";
import { PATH_NAME } from "../configs";
import { MRoute } from "../models/model";
import forgotPassword from "../pages/forgot-password";

import login from "../pages/login";
import homeScreen from "../pages/home-page";

const routesList: MRoute[] = [
  {
    path: PATH_NAME.ROOT,
    component: homeScreen,
  },
  {
    path: PATH_NAME.FORGOT_PASSWORD,
    component: forgotPassword,
    layout: MobileLayout,
  },
];

const renderRoutes = () => {
  return (
    <>
      <Routes>
        {routesList.map((route: MRoute, idx: number) => {
          const Guard = route.guard || Fragment;
          const Layout = route.layout || Fragment;
          const Component = route.component;
          return (
            <Route
              key={`routes-${route.path}-${idx}`}
              path={route.path || ""}
              element={
                <Guard>
                  <Layout>
                    <Component />
                  </Layout>
                </Guard>
              }
            />
          );
        })}
      </Routes>
    </>
  );
};

function AppRoutes() {
  return renderRoutes();
}

export default AppRoutes;
