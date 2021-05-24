import React, { ReactElement } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../../store/state";
import styled, { css } from "styled-components";
import * as API from "../../apis";

const Layout = styled.header`
  border-bottom: 1px solid #bcbcbc;
  z-index: 100;
`;

const Container = styled.div<{ type: string }>`
  display: flex;
  margin: 0 auto;
  padding: 0 40px;
`;

const Logo = styled.h1`
  flex: 1 1 auto;
  display: flex;
  font-size: 40px;
  font-weight: bold;
  height: 80px;
  line-height: 80px;
  justify-self: end;

  a {
    text-decoration: none;
    color: #333;
  }
`;

const Nav = styled.nav`
  flex: 8 1 auto;
  display: inline-flex;
  height: 80px;
  line-height: 80px;
  justify-content: flex-end;
`;

const List = styled.ul`
  display: inline-flex;
`;

const Item = styled.li<{ type: string }>`
  a {
    padding: 0 30px;
    font-size: 16px;
    text-decoration: none;
    color: #333;
    font-weight: 500;

    ${(props) => {
      if (props.type === "on") {
        return css`
          color: #ada;
        `;
      }
    }}
  }
`;

const Profile = styled.div`
  flex: 1 1 auto;
  display: flex;

  a {
    justify-content: flex-end;
    flex: 1 1 auto;
    display: inline-flex;
    text-decoration: none;
    color: #333;
  }
`;

const Image = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 15px;
  border: 1px solid #eee;
  align-self: center;
`;

const Info = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-content: center;
  align-self: center;
`;

const Name = styled.span`
  font-weight: 600;
`;

const Email = styled.span`
  color: #9e9e9e;
  letter-spacing: normal;
`;

interface Props {
  type?: string;
}

export default function Header({ type = "" }: Props): ReactElement {
  const { url } = useRouteMatch();
  const user = useRecoilValue(userState);

  const logout = () => {
    API.logout()
      .then((json) => {

        if (json.error) throw json;

        alert("로그아웃이 성공하였습니다.");
        window.location.href = "/";
      })
      .catch((error) => {
        alert(
          "로그아웃 중 서버 오류 발생! 잠시후 다시 시도해주세요. 메시지:" +
            JSON.stringify(error)
        );
      });
  };

  return (
    <Layout>
      <Container type={type}>
        <Logo>
          <Link to="/">KAN</Link>
        </Logo>
        <Nav>
          <List>
            <Item type={url === "/event" ? "on" : ""}>
              <Link to="/me/event">
                <span>이벤트</span>
              </Link>
            </Item>
            {!user && (
              <>
            <Item type={url === "/event" ? "on" : ""}>
              <Link to="/login">
                <span>로그인</span>
              </Link>
            </Item>
            <Item type={url === "/event" ? "on" : ""}>
              <Link to="/join">
                <span>회원가입</span>
              </Link>
            </Item>
            </>
            )}
            {user && (
             <>
              <Item type={url === "/event" ? "on" : ""}>
                <Link onClick={logout} to="/">
                  <span>로그아웃</span>
                </Link>
              </Item>
              </>
            )}
          </List>
        </Nav>
        {user && (
          <>
            <Profile>
              <Link to="/me/home">
                <Image src={user.thumbnail} alt="프로필 사진" />
                <Info>
                  <Name>
                    {user.lastName} {user.firstName}
                  </Name>
                  <Email>{user.email}</Email>
                </Info>
              </Link>
            </Profile>
          </>
        )}
      </Container>
    </Layout>
  );
}
