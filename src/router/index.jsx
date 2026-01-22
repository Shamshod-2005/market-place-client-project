import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage";
import Blog from "../features/blogs/pages/Blog";
import Home from "../features/home/pages/Home";
import PlantCare from "../features/plant care/pages/PlantCare";
import Shop from "../features/shop/pages/Shop";
import ClientLayout from "../layout/ClientLayout";

const Router = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<ClientLayout />}>
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
