import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ClientPrivateRouter = ({ children }) => {
  const { isAuth, user } = useContext(AuthContext);

  console.log("ClientPrivateRouter -> user", user);
  if (!isAuth || user?.roles !== "admin") {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default ClientPrivateRouter;
