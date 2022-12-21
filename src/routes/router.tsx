import { Fragment, useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { MRoute } from "../models/model";

import Demo from "../pages/demo/demo";
import login from "../pages/login";

const routesList: MRoute[] = [
  {
    path: "/",
    component: login,
  },
];

const renderRoutes = () => {
  return (
    <>
      <Routes>
        {routesList.map((route: MRoute, idx: number) => {
          const Guard = route.guard || Fragment;
          const Component = route.component;
          return (
            <Route
              key={`routes-${route.path}-${idx}`}
              path={route.path || ""}
              element={
                <Guard>
                  <Component />
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
