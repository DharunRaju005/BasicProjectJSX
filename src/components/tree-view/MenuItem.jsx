import styled from "styled-components";
import MenuList from "./MenuList";
import { useState } from "react";
import {FaMinus,FaPlus} from 'react-icons/fa';

const MenuItem=({item})=>{

const[displayCurrentChildren,setDisplayCurrentChildren]=useState({});
const handleToggleChildren=(getCurrentLabel)=>{
    setDisplayCurrentChildren({...displayCurrentChildren,
    [getCurrentLabel]:!displayCurrentChildren[getCurrentLabel]})
    //console.log(getCurrentLabel);

}


//console.log(displayCurrentChildren);

    return(
        <Container>
            <Item>
                <p>{item.label}</p>
                {
                    item && item.children && item.children.length ?( <span onClick={()=>handleToggleChildren(item.label)}>
                    {
                        displayCurrentChildren[item.label]?<FaMinus/>:<FaPlus/>
                    }
                    </span>):null
                }
            </Item>
                {
                    item && item.children && item.children.length>0 && displayCurrentChildren[item.label] ? (<MenuList list={item.children} />):null
                }
            
        </Container>
    );
};


const Container=styled.li`
    list-style: none;
    margin-top: 0px;
    margin-bottom: 0px;
    `;

const Item=styled.div`
    display:flex;
    align-items:center;
    gap:20px;
    cursor:pointer;
    color:#fff
    `;

export default MenuItem;
