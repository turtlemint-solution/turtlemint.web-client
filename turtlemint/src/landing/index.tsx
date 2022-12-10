import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { CarInsuranceBg } from "../common/assets/images";
import Layout from "../dashboard-module/layout/layout";
import CarInsuranceCard from "./car-insurane-card";
/**
 * @returns {JSX.Element}
 */
const Landing: FC<{}> = (): JSX.Element => {
  return (
    <Layout>
      <Box>
        <Flex>
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <CarInsuranceCard />
          </Box>
          <img
            src={CarInsuranceBg}
            style={{ width: "-webkit-fill-available" }}
          />
        </Flex>
      </Box>
    </Layout>
  );
};

export default Landing;
