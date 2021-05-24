import React, { ReactElement } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { User } from '../../schemas/types';
import styled, { css } from "styled-components";
import { userState } from '../../store/state';

export const Layout = styled.header`
  z-index: 100;
  border-bottom: 1px solid #bcbcbc;
`;

export const Container = styled.div<{ type: string }>`
  display: flex;
  margin: 0 auto;
  padding: 0 40px 0 0;
  ${({ type }) => {
    if(type === "main") {
      return css`
        width: 1280px;
      `;
    }
  }}
`;

export const Nav = styled.nav`
  flex: 5 1 auto;
  display: inline-flex;
  height: 70px;
  line-height: 70px;
  justify-content: flex-start;
`;

export const List = styled.ul`
  display: inline-flex;
  padding-left: 20px;
`;

export const Item = styled.li<{ type: string }>`
  ${props => {
    if(props.type === "on"){
      return css`
        /* color: #fff; */
        border-bottom: 2px solid #333;
      `;
    }
  }}

  a {
    padding: 10px 40px;
    font-size: 16px;
    text-decoration: none;
    color: #333;
    font-weight: 500;
  }
`;

export const Profile = styled.div`
  flex: 0 0 330px;
  padding-left: 40px;
  display: flex;
  background-color: rgba(111, 218, 111, 0.2);
  border-right: 1px solid #bcbcbc;
  
  a {
    justify-content: flex-start;
    flex: 1 1 auto;
    display: inline-flex;
    text-decoration: none;
    color: #333;
  }
`;

export const Image = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 15px;
  border: 1px solid #eee;
  align-self: center;
`;

export const Info = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-content: center;
  align-self: center;
`;

export const Name = styled.span`
  font-weight: 600;
`;

export const Email = styled.span`
  color: #9e9e9e;
  letter-spacing: normal;
`;


interface Props {
  type?: string;
}

export default function MyTabs({ type="" }: Props): ReactElement {
  const { url } = useRouteMatch();
  const user = useRecoilValue(userState);
  
  return (
    <Layout>
      <Container type={type}>
        { user &&
        <Profile>
          <Link to="/me/home">
            <Image src="https://www.shareicon.net/data/256x256/2015/08/18/87265_professor_256x256.png" alt="프로필 사진"/>
            <Info>
              <Name>{user.lastName} {user.firstName}</Name>
              <Email>{user.email}</Email>
            </Info>
          </Link>
        </Profile>
        }
        <Nav>
          <List>
            <Item type={url === "/me/home" ? 'on' : ''}><Link to="/me/home">홈</Link></Item>
            <Item type={url === "/me/event" ? 'on' : ''}><Link to="/me/event">이벤트</Link></Item>
            <Item type={url === "/me/network" ? 'on' : ''}><Link to="/me/network">네트워킹</Link></Item>
            <Item type={url === "/me/profile" ? 'on' : ''}><Link to="/me/profile">프로필</Link></Item>
          </List>
        </Nav>
      </Container>
    </Layout>
  );
}