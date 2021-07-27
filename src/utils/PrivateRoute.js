import { Route, Navigate } from "react-router-dom";
import { useLogin } from "../context/AuthProvider";

export default function PrivateRoute({ path, ...props }) {
  console.log({ ...props });
  const { isLoggedIn } = useLogin();

  return isLoggedIn ? (
    <Route {...props} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
}
