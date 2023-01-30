import { Container } from "@mui/system";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import OptionItem from "./components/OptionItem";
import Translation from "./components/Translation";

const App = () => {
  const { selectedOption } = useSelector((state) => state.user);

  return (
    <Fragment>
      <Container component={"main"} maxWidth="md">
        <OptionItem />
        {Object.values(selectedOption).length !== 0 && <Translation />}
      </Container>
    </Fragment>
  );
};

export default App;
