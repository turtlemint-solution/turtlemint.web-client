import { FC, useState } from "react";
import {
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import {
  CarHdfcErgo,
  CarInsuranceDekho,
  CarPolicyBazar,
} from "../../../../common/mock-data/CarData";

interface CarTableProps {
  maker: string;
  model: string;
  year: number;
}
/**
 * @returns {JSX.Element}
 */
const CarTable: FC<{}> = (): JSX.Element => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Bajaj</Tab>
          <Tab>digit</Tab>
          <Tab>United India Insurance</Tab>
          <Tab>Sriram</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <TableContainer>
              <Text
                ml={2}
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="lg"
                letterSpacing="wide"
                color="teal.600"
              >
                Insurance Dekho
              </Text>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Company</Th>
                    <Th>Premium</Th>
                    <Th>Policy Type</Th>
                    <Th>IDV</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {CarInsuranceDekho?.map((el: any, index: number) => {
                    return (
                      <>
                        {el.provider === "bajaj" ? (
                          <Tr>
                            <Td>{el.provider}</Td>
                            <Td>{el.premiumAmount}</Td>
                            <Td>{el.policy}</Td>
                            <Td>{el.idv}</Td>
                          </Tr>
                        ) : (
                          <></>
                        )}
                      </>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
            <TableContainer>
              <Text
                ml={2}
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="lg"
                letterSpacing="wide"
                color="teal.600"
              >
                Policy Bazar
              </Text>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Company</Th>
                    <Th>Premium</Th>
                    <Th>Policy Type</Th>
                    <Th>IDV</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {CarPolicyBazar?.map((el: any, index: number) => {
                    return (
                      <>
                        {el.provider === "bajaj" ? (
                          <Tr>
                            <Td>{el.provider}</Td>
                            <Td>{el.premiumAmount}</Td>
                            <Td>{el.policy}</Td>
                            <Td>{el.provider}</Td>
                          </Tr>
                        ) : (
                          <></>
                        )}
                      </>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
            <TableContainer>
              <Text
                ml={2}
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="lg"
                letterSpacing="wide"
                color="teal.600"
              >
                HDFC Ergo
              </Text>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Company</Th>
                    <Th>Premium</Th>
                    <Th>Policy Type</Th>
                    <Th>IDV</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {CarHdfcErgo?.map((el: any, index: number) => {
                    return (
                      <>
                        {el.provider === "bajaj" ? (
                          <Tr>
                            <Td>{el.provider}</Td>
                            <Td>{el.premiumAmount}</Td>
                            <Td>{el.policy}</Td>
                            <Td>{el.provider}</Td>
                          </Tr>
                        ) : (
                          <></>
                        )}
                      </>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel>
            <TableContainer>
              <Text
                ml={2}
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="lg"
                letterSpacing="wide"
                color="teal.600"
              >
                Insurance Dekho
              </Text>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Company</Th>
                    <Th>Premium</Th>
                    <Th>Policy Type</Th>
                    <Th>IDV</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {CarInsuranceDekho?.map((el: any, index: number) => {
                    return (
                      <>
                        {el.provider === "digit" ? (
                          <Tr>
                            <Td>{el.provider}</Td>
                            <Td>{el.premiumAmount}</Td>
                            <Td>{el.policy}</Td>
                            <Td>{el.idv}</Td>
                          </Tr>
                        ) : (
                          <></>
                        )}
                      </>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
            <TableContainer>
              <Text
                ml={2}
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="lg"
                letterSpacing="wide"
                color="teal.600"
              >
                Policy Bazar
              </Text>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Company</Th>
                    <Th>Premium</Th>
                    <Th>Policy Type</Th>
                    <Th>IDV</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {CarPolicyBazar?.map((el: any, index: number) => {
                    return (
                      <>
                        {el.provider === "digit" ? (
                          <Tr>
                            <Td>{el.provider}</Td>
                            <Td>{el.premiumAmount}</Td>
                            <Td>{el.policy}</Td>
                            <Td>{el.provider}</Td>
                          </Tr>
                        ) : (
                          <></>
                        )}
                      </>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
            <TableContainer>
              <Text
                ml={2}
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="lg"
                letterSpacing="wide"
                color="teal.600"
              >
                HDFC Ergo
              </Text>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Company</Th>
                    <Th>Premium</Th>
                    <Th>Policy Type</Th>
                    <Th>IDV</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {CarHdfcErgo?.map((el: any, index: number) => {
                    return (
                      <>
                        {el.provider === "digit" ? (
                          <Tr>
                            <Td>{el.provider}</Td>
                            <Td>{el.premiumAmount}</Td>
                            <Td>{el.policy}</Td>
                            <Td>{el.provider}</Td>
                          </Tr>
                        ) : (
                          <></>
                        )}
                      </>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel>
            <TableContainer>
              <Text
                ml={2}
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="lg"
                letterSpacing="wide"
                color="teal.600"
              >
                Insurance Dekho
              </Text>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Company</Th>
                    <Th>Premium</Th>
                    <Th>Policy Type</Th>
                    <Th>IDV</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {CarInsuranceDekho?.map((el: any, index: number) => {
                    return (
                      <>
                        {el.provider === "Sriram" ? (
                          <Tr>
                            <Td>{el.provider}</Td>
                            <Td>{el.premiumAmount}</Td>
                            <Td>{el.policy}</Td>
                            <Td>{el.idv}</Td>
                          </Tr>
                        ) : (
                          <></>
                        )}
                      </>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
            <TableContainer>
              <Text
                ml={2}
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="lg"
                letterSpacing="wide"
                color="teal.600"
              >
                Policy Bazar
              </Text>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Company</Th>
                    <Th>Premium</Th>
                    <Th>Policy Type</Th>
                    <Th>IDV</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {CarPolicyBazar?.map((el: any, index: number) => {
                    return (
                      <>
                        {el.provider === "Sriram" ? (
                          <Tr>
                            <Td>{el.provider}</Td>
                            <Td>{el.premiumAmount}</Td>
                            <Td>{el.policy}</Td>
                            <Td>{el.provider}</Td>
                          </Tr>
                        ) : (
                          <></>
                        )}
                      </>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
            <TableContainer>
              <Text
                ml={2}
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="lg"
                letterSpacing="wide"
                color="teal.600"
              >
                HDFC Ergo
              </Text>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Company</Th>
                    <Th>Premium</Th>
                    <Th>Policy Type</Th>
                    <Th>IDV</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {CarHdfcErgo?.map((el: any, index: number) => {
                    return (
                      <>
                        {el.provider === "Sriram" ? (
                          <Tr>
                            <Td>{el.provider}</Td>
                            <Td>{el.premiumAmount}</Td>
                            <Td>{el.policy}</Td>
                            <Td>{el.provider}</Td>
                          </Tr>
                        ) : (
                          <></>
                        )}
                      </>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel>
            <TableContainer>
              <Text
                ml={2}
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="lg"
                letterSpacing="wide"
                color="teal.600"
              >
                Insurance Dekho
              </Text>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Company</Th>
                    <Th>Premium</Th>
                    <Th>Policy Type</Th>
                    <Th>IDV</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {CarInsuranceDekho?.map((el: any, index: number) => {
                    return (
                      <>
                        {el.provider === "United India Insurance" ? (
                          <Tr>
                            <Td>{el.provider}</Td>
                            <Td>{el.premiumAmount}</Td>
                            <Td>{el.policy}</Td>
                            <Td>{el.idv}</Td>
                          </Tr>
                        ) : (
                          <></>
                        )}
                      </>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
            <TableContainer>
              <Text
                ml={2}
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="lg"
                letterSpacing="wide"
                color="teal.600"
              >
                Policy Bazar
              </Text>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Company</Th>
                    <Th>Premium</Th>
                    <Th>Policy Type</Th>
                    <Th>IDV</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {CarPolicyBazar?.map((el: any, index: number) => {
                    return (
                      <>
                        {el.provider === "United India Insurance" ? (
                          <Tr>
                            <Td>{el.provider}</Td>
                            <Td>{el.premiumAmount}</Td>
                            <Td>{el.policy}</Td>
                            <Td>{el.provider}</Td>
                          </Tr>
                        ) : (
                          <></>
                        )}
                      </>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
            <TableContainer>
              <Text
                ml={2}
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="lg"
                letterSpacing="wide"
                color="teal.600"
              >
                HDFC Ergo
              </Text>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Company</Th>
                    <Th>Premium</Th>
                    <Th>Policy Type</Th>
                    <Th>IDV</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {CarHdfcErgo?.map((el: any, index: number) => {
                    return (
                      <>
                        {el.provider === "United India Insurance" ? (
                          <Tr>
                            <Td>{el.provider}</Td>
                            <Td>{el.premiumAmount}</Td>
                            <Td>{el.policy}</Td>
                            <Td>{el.provider}</Td>
                          </Tr>
                        ) : (
                          <></>
                        )}
                      </>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default CarTable;

interface FetcherProps {
  step4: boolean;
  model: string;
  maker: string;
  year: number;
}
export const Fetcher: FC<FetcherProps> = ({
  step4,
  model,
  maker,
  year,
}): JSX.Element => {
  return <div></div>;
};
