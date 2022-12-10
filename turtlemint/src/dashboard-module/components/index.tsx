import { ROUTING_URLS } from "../../common/constants/app-constants";
import Dashboard from "./dashboard";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/layout";
import Support from "./support";
import CarInsurance from "./car-insurance";
import CarTable from "./insurances/car/car-table";

const Home = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path={`${ROUTING_URLS.SUPPORT}`} element={<Support />} />
        <Route path={`${ROUTING_URLS.CAR_INSURANCE}`} element={<CarTable />} />
      </Routes>
    </Layout>
  );
};

export default Home;
export { Dashboard, Support };
