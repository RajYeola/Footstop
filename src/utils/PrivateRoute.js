import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function PrivateRoute({ path, ...props }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Route {...props} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
}
