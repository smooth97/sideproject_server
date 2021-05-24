import React, { ReactElement } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../../store/state";
import styled, { css } from "styled-components";
import * as API from "../../apis";

export const Layout = styled.header`
  border-bottom: 1px solid #bcbcbc;
  z-index: 100;
`;

export const Container = styled.div<{ type: string }>`
  display: flex;
  margin: 0 auto;
  padding: 0 40px;

  ${(props) => {
    if (props.type === "main") {
      return css`
        width: 1280px;
      `;
    }
  }}
`;

export const Logo = styled.h1`
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

export const Nav = styled.nav`
  flex: 8 1 auto;
  display: inline-flex;
  height: 80px;
  line-height: 80px;
  justify-content: flex-end;
`;

export const List = styled.ul`
  display: inline-flex;
`;

export const Item = styled.li<{ type: string }>`
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

export const Profile = styled.div`
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

const EventTitle = styled.h2`
  flex: 1 auto;
  font-size: 30px;
  align-self: center;
  font-weight: bold;
  margin-left: auto;
`;

const Submit = styled.button`
  height: 32.8px;
  align-self: center;
  font-size: 14px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 0 10px;
  font-weight: 400;
  border-radius: 3px;
  outline: none;
`;

interface Props {
  type?: string;
}

export default function EventHeader({ type = "" }: Props): ReactElement {
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
        <EventTitle>ICBC 이벤트</EventTitle>
        <Submit>이벤트 발행</Submit>
        {user && (
          <>
            <Profile>
              <Link to="/me/home">
                <Image src={user.thumbnail} alt="프로필 사진" />
                <Info>
                  <Name>{user.name}</Name>
                  <Email>{user.email}</Email>
                </Info>
              </Link>
            </Profile>
            <div onClick={logout}>로그아웃</div>
          </>
        )}
      </Container>
    </Layout>
  );
}
