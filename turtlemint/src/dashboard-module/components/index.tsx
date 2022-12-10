import { ROUTING_URLS } from "../../common/constants/app-constants";
import Dashboard from "./dashboard";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/layout";
import Support from "./support";

const Home = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route
          path={`${ROUTING_URLS.SUPPORT}`}
          element={<Support />}
        />
      </Routes>
    </Layout>
  );
};

export default Home;
export { Dashboard, Support };
