import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Header from "./components/Header";
import MyTabs from "./components/MyTabs";
import Sidebar from "./components/Sidebar";
import { userState } from "./store/state";
import Main from "./views/Main";
import Login from "./views/Login";
import Join from "./views/Join";
import ChangePassword from "./views/ChangePassword";

import * as API from "./apis";

export const ContentsLayout = styled.section`
  display: flex;
  height: calc(100vh - 152px);
`;

export const Layout = styled.section`
  display: flex;
  height: calc(100vh - 152px);
`

function App() {
  const [user, setUser] = useRecoilState(userState);
  const defaultUser = user;

  useEffect(() => {
    /*
    API.getUserInfo()
      .then((json) => {
        if (json.error) throw json;
        setUser(json.user);
      })
      .catch((error) => {
        alert("로그인 안되어있음. 메시지:" + JSON.stringify(error));
      });
    */
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/login", "/join", "/ChangePassword"]}>
          <Header type="main" />
          <Switch>
            <Route path="/login" component={Login} exact={true} />
            <Route path="/join" component={Join} />
            <Route path="/ChangePassword" component={ChangePassword} />
          </Switch>
        </Route>
        <Route exact path="/">
          <Header type="main" />
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;