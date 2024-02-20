import styled from "styled-components";
import QRCode from "react-qr-code";
import { useState } from "react";

const QrGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQrCode = () => {
    setQrCode(input);
    setInput("");
  };
  return (
    <>
      <InputContainer>
        <h1>Qr Code Generator</h1>
        <Input onChange={(e) => setInput(e.target.value)} type="text" name="qr-code" placeholder="Entr the value" />
        <button onClick={() => handleGenerateQrCode} disabled={input && input.trim() !== "" ? false : true}>
          Generate
        </button>
      </InputContainer>
      <QrHolder>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </QrHolder>
    </>
  );
};

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

const Input = styled.input``;

const QrHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;

export default QrGenerator;
