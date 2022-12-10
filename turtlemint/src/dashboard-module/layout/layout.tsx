import { Box } from "@chakra-ui/react";
import { FC } from "react";
// import "./layout.scss";
import { useLocation } from "react-router-dom";
import Navbar from "../common/navbar";

interface ILayout {
  children: JSX.Element;
}

const Layout: FC<ILayout> = ({ children }) => {
  // const { pathname } = useLocation();
  return (
    <Box>
      <Navbar />
      <Box>
        <Box className="dashboard-main">{children}</Box>
        {/* <Footer /> */}
      </Box>
    </Box>
  );
};

export default Layout;
