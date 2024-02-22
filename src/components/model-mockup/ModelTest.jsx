import styled from "styled-components";
import Model from "./Model";
import { useState } from "react";

const ModelTest = () => {
  const [showModalPopup, setModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setModalPopup(!showModalPopup);
  }

  function onClose() {
    setModalPopup(false);
  }
  return (
    <Container>
      <Button onClick={handleToggleModalPopup}>Open PopUp</Button>
      {showModalPopup && <Model id={"CustomId"} onClose={onClose} Body={<div>Custom Body</div>} />}
    </Container>
  );
};

const Button = styled.button``;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

export default ModelTest;
