import styled from "styled-components";
import QRCode from "react-qr-code"

const QrGenerator=()=>{
    return(<>
        <Container>
            <h1>Qr Code Generator</h1>
            <Input type="text" name="qr-code" placeholder="Entr the value"/> 
        </Container>
        <QrHolder>
          <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
        </QrHolder>

        </>


    );
};

const Container=styled.div``;

const Input=styled.input``;

const QrHolder=styled.div``;

export default QrGenerator;