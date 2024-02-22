import styled, { keyframes } from "styled-components";

const Model = ({ id, Header, Body, Footer, onClose }) => {
  return (
    <TopContainer id={id || "Model"}>
      <Content>
        <HeaderSection>
          <Icon onClick={onClose}>&times;</Icon>
          <h2>{Header ? Header : "Header"}</h2>
        </HeaderSection>
        <BodySection>{Body ? Body : <div>This is Body</div>}</BodySection>
        <FooterSection>{Footer ? Footer : <div>This is Footer</div>}</FooterSection>
      </Content>
    </TopContainer>
  );
};

const TopContainer = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 150px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #baf005;
`;

const Content = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid red;
  width: 80%;
  animation: animateModal 0.5s;
  @keyframes animateModal {
    from {
      top: -200px;
      opacity: 0;
    }
  
    to {
      top: 0;
      opacity: 1;
    }
  }
`;

const Icon = styled.span`
  cursor: pointer;
  font-size: 40px;
  float: right;
  font-weight: bold;
`;
const HeaderSection = styled.div`
  padding: 4px 16px;
  background-color: #5cb85c;
  color: #fff;
`;
const BodySection = styled.div`
  padding: 2px 16px;
  height: 200px;
`;

const FooterSection = styled.div`
  padding: 2px 16px;
  background-color: #5cb85c;
  color: #fff;
`;



export default Model;
