import styled from "styled-components";
import MenuList from "./MenuList";

const TreeView = ({ menus = [] }) => {
  return (
    <TreeViewContainer>
      <MenuList list={menus} />
    </TreeViewContainer>
  );
};

const TreeViewContainer = styled.div`
  min-height: 100vh;
  width: 350px;
  background: rgb(0, 71, 110);
`;

export default TreeView;
