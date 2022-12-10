import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { CarInsuranceBg } from "../common/assets/images";
import CarInsurance from "../dashboard-module/components/car-insurance";
import CarMakers from "../dashboard-module/components/car-insurance/car-makers";
import Layout from "../dashboard-module/layout/layout";
import CarInsuranceCard from "./car-insurane-card";
/**
 * @returns {JSX.Element}
 */
const Landing: FC<{}> = (): JSX.Element => {
  const [step, setStep] = useState(1);
  return (
    <Layout>
      <Box>
        <Flex>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"300px"}
          >
            {step === 1 ? (
              <Card maxW="sm">
                <CardBody>
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Enter Vehicle Number</Heading>
                    <Input></Input>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button
                      variant="solid"
                      colorScheme="green"
                      onClick={() => {
                        setStep(2);
                      }}
                    >
                      Submit
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            ) : (
              <CarMakers />
            )}
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
