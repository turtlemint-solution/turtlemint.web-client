import { FC } from "react";
import { Image } from "@chakra-ui/react";
import { dashboardImage } from "../../../common/assets/images";
/**
 * @returns {JSX.Element}
 */
const Dashboard: FC<{}> = (): JSX.Element => {
  return (
    <div>
      <img src={dashboardImage} style={{ width: "-webkit-fill-available" }} />
    </div>
  );
};

export default Dashboard;
