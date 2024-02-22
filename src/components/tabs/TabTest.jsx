import styled from "styled-components";
import Tabs from "./Tabs";

const TabTest = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is from TAb 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is from TAb 2</div>,
    },
    {
      label: "Tab 3",
      content: <div>This is from TAb 3</div>,
    },
  ];
  console.log(tabs);

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }
  return <Tabs tabsContent={tabs} onChange={handleChange} />;
};

export default TabTest;
