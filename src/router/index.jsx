import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "../features/home/pages/Home";
import Shop from "../features/shop/pages/Shop";
import Blog from "../features/blogs/pages/Blog";
import PlantCare from "../features/plant care/pages/PlantCare";
import ClientPrivateRouter from "./ClientPrivateRouter";
import ClientLayout from "../layout/ClientLayout";
import LoginPage from "../features/auth/pages/LoginPage";

const Router = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <ClientPrivateRouter>
              <ClientLayout />
            </ClientPrivateRouter>
          }
        >
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/plant-care" element={<PlantCare />} />

          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </>,
    ),
  );

  return <RouterProvider router={routes} />;
};

export default Router;
