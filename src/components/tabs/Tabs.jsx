import styled from "styled-components";
import { useState } from "react";
//import TabTest from "./TabTest";
const Tabs = ({ tabsContent = [], onChange }) => {
  //console.log("Tabs - tabsContent:", tabsContent);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleOnClick = (getCurrentIndex) => {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  };
  return (
    <Wrapper>
      <Heading>
        {tabsContent.map((tabItem, index) => (
          <TabItem key={tabItem.label} className={currentTabIndex === index ? "active" : ""} onClick={() => handleOnClick(index)}>
            <Label>{tabItem.label}</Label>
          </TabItem>
        ))}
      </Heading>
      <Content style={{ color: "red" }}>{tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
`;

const Heading = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
`;

const TabItem = styled.div`
  display: inline-flex;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  color: #fff;
  background: #4e016a;

  &.active {
    border-color: #000;
    background: #a1d600;
    color: #fff;
  }
`;

const Label = styled.span``;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  height: 300px;
  overflow: auto;
  background-color: #fff;
`;

export default Tabs;
