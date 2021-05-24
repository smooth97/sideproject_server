import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Container = styled.aside`
  flex: 0 0 330px;
  background-color: #fff;
  border-right: 1px solid #bcbcbc;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  z-index: 100;
  font-size: 16px;
`;

const Group = styled.li`
  margin-top: 20px;
`;

const Menu = styled.li`
  font-size: 16px;
  border-radius: 3px;
  margin: 3px 0 5px;
  line-height: 40px;

  & > * {
    vertical-align: middle;
  }

  a {
    display: flex;
    padding: 0 20px;
    text-decoration: none;
    line-height: 50px;
    border-radius: 3px;
    color: #333;

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

interface Props {}

export default function TreeSidebar({}: Props): ReactElement {
  return (
    <Container>
      <ul>
        <Group>
          <h3>이벤트 상세</h3>
          <ul>
            <Menu>
              <Link to="/event/edit">기본 정보 편집</Link>
            </Menu>
            <Menu>
              <Link to="/me/event/manage/ticket/published">티켓팅</Link>
            </Menu>
          </ul>
        </Group>
        <Group>
          <h3>이벤트 영역</h3>
          <ul>
            <Menu>
              <Link to="/me/event/manage/reception/edit">리셉션 편집</Link>
            </Menu>
            <Menu>
              <Link to="./">스테이지 편집</Link>
            </Menu>
            <Menu>
              <Link to="./">세션 편집</Link>
            </Menu>
            <Menu>
              <Link to="./">네트워킹 편집</Link>
            </Menu>
            <Menu>
              <Link to="./">엑스포 편집</Link>
            </Menu>
          </ul>
        </Group>
        <Group>
          <h3>콘텐츠 관리</h3>
          <ul>
            <Menu>
              <Link to="./">연사 관리</Link>
            </Menu>
            <Menu>
              <Link to="./">이벤트 위원 관리</Link>
            </Menu>
            <Menu>
              <Link to="./">콘텐츠 관리</Link>
            </Menu>
          </ul>
        </Group>
      </ul>
    </Container>
  );
}
