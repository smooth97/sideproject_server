import React, { ReactElement } from 'react';
import SchoolIcon from '@material-ui/icons/School';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Link, useRouteMatch } from 'react-router-dom';
import styled, { css } from "styled-components";

export const Container = styled.aside`
  flex: 0 0 330px;
  background-color: #fff;
  border-right: 1px solid #bcbcbc;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  z-index: 100;
`;

export const GroupName = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #999;
`;

export const List = styled.ul`
`;

export const Menu = styled.li<{ type: string }>`
  font-size: 16px;
  border-radius: 3px;
  margin: 3px 0 5px;
  line-height: 40px;

  ${props => {
    if(props.type === "on"){
      return css`
        background-color: #444;
      `;
    }
  }}

  & > * {
    vertical-align: middle;
  }

  a {
    display: flex;
    padding: 0 20px;
    text-decoration: none;
    line-height: 50px;
    border-radius: 3px;
    ${props => {
      if(props.type === "on"){
        return css`
            color: #fff;
          `;
      } else {
        return css`
            color: #444;
            &:hover {
              background-color: #eee;
              transition: all .3s;
            }
          `;
      }
    }}

    svg {
      align-self: center;
      justify-self: left;
      margin-right: 12px;
    }

    span {
      align-self: center;
      justify-self: left;
    }
  }
`;

export const AddInstitutionButton = styled(Link)`
  background-color: #fff;
  outline: none;
  border: 1px #bcbcbc dashed;
  color: #bcbcbc;
  border-radius: 3px;
  text-align: center;
  padding: 0 20px;
  text-decoration: none;
  line-height: 50px;
  display: flex;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    border: 1px #333 solid;
    color: #333;
    transition: all .3s;
  }

  svg {
    align-self: center;
    margin-right: 10px;
  }
  
  span {
    align-self: center;
  }
`;

export default function Sidebar(): ReactElement {
  const { url } = useRouteMatch();
  
  return (
    <Container>
      <GroupName>기관</GroupName>
      <List>
        <Menu type={url === "/institution/1" ? 'on' : ''}>
          <Link to="/institution/1">
            <SchoolIcon />
            <span>IEEE ICBC</span>
          </Link>
        </Menu>
        <Menu type={url === "/institution/2" ? 'on' : ''}>
          <Link to="/institution/2">
            <SchoolIcon />
            <span>IEEE ICBC</span>
          </Link>
        </Menu>
        <Menu type={url === "/institution/3" ? 'on' : ''}>
          <Link to="/institution/3">
            <SchoolIcon />
            <span>IEEE ICBC</span>
          </Link>
        </Menu>
      </List>
      <AddInstitutionButton to="/institution/add">
        <AddCircleOutlineIcon/>
        <span>기관등록</span>
      </AddInstitutionButton>
    </Container>
  );
}