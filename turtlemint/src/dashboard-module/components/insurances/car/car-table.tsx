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
} from "@chakra-ui/react";
import { CarInsuranceDekho } from "../../../../common/mock-data/CarData";

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
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Insurance Dekho</TableCaption>
          <Thead>
            <Tr>
              <Th>Company</Th>
              <Th>Premium</Th>
              <Th>Policy Type</Th>
            </Tr>
          </Thead>
          <Tbody>
            {CarInsuranceDekho?.map((el: any, index: number) => {
              return (
                <Tr>
                  <Td>{el.provider}</Td>
                  <Td>{el.premiumAmount}</Td>
                  <Td>{el.policy}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
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
