import React, { FC } from "react";
import {
  Box,
  Flex,
  AspectRatio,
  Image,
  Text,
  Link,
  Button,
  Stack,
} from "@chakra-ui/react";
interface CardProps {
  maker: string;
  image: any;
}
const Card: FC<CardProps> = ({ maker, image }): JSX.Element => {
  return (
    <Flex p={4} direction="column" maxWidth="15rem" borderWidth={1} margin={2}>
      <Flex direction={"column"} alignItems={"center"}>
        <Image maxWidth="200px" margin="auto" src={image} alt="maker"></Image>
        {/* <Stack
          align={{ base: "center", md: "stretch" }}
          textAlign={{ base: "center", md: "left" }}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
        >
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="lg"
            letterSpacing="wide"
            color="teal.600"
          >
            {maker}
          </Text>
        </Stack> */}
      </Flex>
    </Flex>
  );
};

export default Card;
