import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PageNotFound } from "../screens";
import { ROUTING_URLS } from "../constants/app-constants";
import { ProtectedRoutes, UnlockedRoutes } from "./private-route";
import Home from "../../dashboard-module/components";
import Landing from "../../landing";

const { GENERAL, HOME, NON_EXISTENT } = ROUTING_URLS;

/**
 * @returns {JSX.Element}
 */
const RoutingManager: FC<{}> = (): JSX.Element => {
  const isOnboarded = true;
  return (
    <Routes>
      <Route path={GENERAL} element={<Landing />} />
      <Route element={<ProtectedRoutes />}>
        <Route element={<UnlockedRoutes />}>
          <Route path={`${HOME}/*`} element={<Home />} />
        </Route>
      </Route>

      <Route path={NON_EXISTENT} element={<PageNotFound />} />
    </Routes>
  );
};

export default RoutingManager;
