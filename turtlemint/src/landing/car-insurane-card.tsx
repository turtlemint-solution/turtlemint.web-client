import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  Image,
  Input,
} from "@chakra-ui/react";
import { FC } from "react";
/**
 * @returns {JSX.Element}
 */
const CarInsuranceCard: FC<{}> = (): JSX.Element => {
  return (
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
          <Button variant="solid" colorScheme="green">
            Submit
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default CarInsuranceCard;
