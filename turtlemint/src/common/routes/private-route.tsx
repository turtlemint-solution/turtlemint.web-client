import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ROUTING_URLS } from "../constants/app-constants";

/**
 * @returns {JSX.Element} - A React Component
 */
export function ProtectedRoutes(): JSX.Element {
  const isLoggedIn = true;
  let location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to={ROUTING_URLS.NON_EXISTENT} state={{ from: location }} />;
  }

  return <Outlet />;
}

/**
 * UnlockedRoutes are the routes that are locked until the user is completely logged in
 * @returns {JSX.Element} - A React Component
 */
export const UnlockedRoutes = (): JSX.Element => {
  const isOnboarded = true;
  if (!isOnboarded) {
    return <Navigate to={ROUTING_URLS.NON_EXISTENT} />;
  }

  return <Outlet />;
};
