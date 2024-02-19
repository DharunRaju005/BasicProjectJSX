import styled from "styled-components";
import MenuItem from "./MenuItem";

const MenuList = ({ list = [] }) => {
  return (
    <MenuListContainer>
        {list && list.length ? list.map((listItem) => <MenuItem item={listItem} />) : null}
    </MenuListContainer>
  );
};

const MenuListContainer = styled.ul`
    list-style: none;
    margin-top: 0px;
    margin-bottom: 0px;
`;

export default MenuList;
