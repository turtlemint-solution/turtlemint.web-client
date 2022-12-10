import Card from "../../common/card/card";
import { FC, useState } from "react";
import {
  HondaLogo,
  HyundaiLogo,
  SkodaLogo,
} from "../../../common/assets/images";
import { CarMaker } from "../../../common/enums/car-models";
import { Flex, Stack, Text } from "@chakra-ui/react";
import { HondaModels } from "../../../common/enums/honda-models";
import { HyundaiModels } from "../../../common/enums/hyundai-models";
import { SkodaModels } from "../../../common/enums/skoda-modela";
/**
 * @returns {JSX.Element}
 */
const CarMakers: FC<{}> = (): JSX.Element => {
  const [carMaker, setCarmaker] = useState("");
  const [carModel, setCarModel] = useState("");
  const [year, setYear] = useState(0);
  const carMakers = [
    {
      id: "1",
      maker: CarMaker.honda,
      image: HondaLogo,
    },
    {
      id: "2",
      maker: CarMaker.hyundai,
      image: HyundaiLogo,
    },
    {
      id: "3",
      maker: CarMaker.skoda,
      image: SkodaLogo,
    },
  ];
  const carModels =
    carMaker === "Honda"
      ? [
          {
            id: "1",
            model: HondaModels.amaze,
          },
          {
            id: "2",
            model: HondaModels.jazz,
          },
          {
            id: "3",
            model: HondaModels.civic,
          },
          {
            id: "3",
            model: HondaModels.city,
          },
        ]
      : carMaker === "Hyundai"
      ? [
          {
            id: "1",
            model: HyundaiModels.aura,
          },
          {
            id: "2",
            model: HyundaiModels.creta,
          },
          {
            id: "3",
            model: HyundaiModels.venue,
          },
          {
            id: "3",
            model: HyundaiModels.verna,
          },
        ]
      : [
          {
            id: "1",
            model: SkodaModels.kodiaq,
          },
          {
            id: "2",
            model: SkodaModels.octavia,
          },
          {
            id: "3",
            model: SkodaModels.slavia,
          },
          {
            id: "3",
            model: SkodaModels.superb,
          },
        ];
  const carModelYear = [
    {
      id: "1",
      year: 2019,
    },
    {
      id: "2",
      year: 2020,
    },
  ];
  const [step, setStep] = useState(1);
  const submitMaker = (maker: string) => {
    setStep(2);
    setCarmaker(maker);
  };
  const submitModel = (model: string) => {
    setStep(3);
    setCarModel(model);
  };
  const submitYear = (year: number) => {
    setStep(4);
    setYear(year);
  };
  return (
    <div>
      {step === 1 && (
        <div>
          <Text
            ml={2}
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="lg"
            letterSpacing="wide"
            color="teal.600"
          >
            Select Brand
          </Text>
          {carMakers.map(function (data) {
            const { id, maker, image } = data;
            return (
              <div>
                <button
                  onClick={() => {
                    submitMaker(maker);
                  }}
                >
                  <Card key={id} maker={maker} image={image} />
                </button>
              </div>
            );
          })}
        </div>
      )}
      {step === 2 && (
        <div>
          <Text
            ml={2}
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="lg"
            letterSpacing="wide"
            color="teal.600"
          >
            Select Model
          </Text>
          {carModels.map(function (data) {
            const { id, model } = data;
            return (
              <div>
                <button
                  onClick={() => {
                    submitModel(model);
                  }}
                >
                  <CarModelCard key={id} model={model} />
                </button>
              </div>
            );
          })}
        </div>
      )}
      {step === 3 && (
        <div>
          <Text
            ml={2}
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="lg"
            letterSpacing="wide"
            color="teal.600"
          >
            Select Year
          </Text>
          {carModelYear.map(function (data) {
            const { id, year } = data;
            return (
              <div>
                <button
                  onClick={() => {
                    submitYear(year);
                  }}
                >
                  <CarModelYearCard key={id} year={year} />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CarMakers;

interface CarModelCardProps {
  model: string;
}
const CarModelCard: FC<CarModelCardProps> = ({ model }): JSX.Element => {
  return (
    <Flex p={4} direction="column" maxWidth="15rem" borderWidth={1} margin={2}>
      <Flex direction={"column"} alignItems={"center"}>
        <Stack
          align={{ base: "center", md: "stretch" }}
          textAlign={{ base: "center", md: "left" }}
          mt={{ base: 4, md: 0 }}
          mx={{ md: 6 }}
        >
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="lg"
            letterSpacing="wide"
            color="teal.600"
          >
            {model}
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
};

interface CarModelYearCardProps {
  year: number;
}
const CarModelYearCard: FC<CarModelYearCardProps> = ({ year }): JSX.Element => {
  return (
    <Flex p={4} direction="column" maxWidth="15rem" borderWidth={1} margin={2}>
      <Flex direction={"column"} alignItems={"center"}>
        <Stack
          align={{ base: "center", md: "stretch" }}
          textAlign={{ base: "center", md: "left" }}
          mt={{ base: 4, md: 0 }}
          mx={{ md: 6 }}
        >
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="lg"
            letterSpacing="wide"
            color="teal.600"
          >
            {year}
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
};
