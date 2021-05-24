import React, { useState } from 'react';
import Modal from 'react-modal';
import ChangePassword from '../ChangePassword';
import styled from 'styled-components';
import * as API from '../../apis';

const LoginBox = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 600px;
  height: 500px;
  position: absolute;
  left: 33%;
  top: 18%;
`;

const Box = styled.div`
  display: flex-column;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  &:nth-child(1) {
    font-size: 25px;
    text-align: center;
    margin-bottom: 30px;
  }
  &:nth-child(2) {
    padding: 1rem;
  }
  &:nth-child(3) {
    padding: 1rem;
  }
`;

const Email = styled.input`
  margin-left: 80px;
  width: 400px;
  height: 40px;
  border: solid 1px #808080;
  border-radius: 5px;
`;

const Password = styled.input`
  margin-left: 80px;
  width: 400px;
  height: 40px;
  border: solid 1px #808080;
  border-radius: 5px;
`;

const FindPassword = styled.button`
  width: 400px;
  height: 30px;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  font-size: 15px;
  color: #006ca7;
  float: right;
  margin-bottom: 5px;
`;

const SignUp = styled.button`
  margin-left: 95px;
  width: 405px;
  height: 40px;
  font-size: 18px;
  background-color: #006ca7;
  color: white;
`;

const H5 = styled.h5`
  text-align: left;
  padding-left: 80px;
  margin: 10px;
  font-weight: lighter;
`;

const customStyles = {
  content: {
    width: "600px",
    height: "550px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFFFFF",
  },
};


const Login = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const onSubmit = () => {
    // 로그인(login)
    API.login({ email: formState.email, password: formState.password })
      .then((json) => {
        if (json.error) throw json;
        alert("로그인이 성공하였습니다.");
        window.location.href = "/";
      })
      .catch((error) => {
        alert(
          "서버 오류 발생! 잠시후 다시 시도해주세요. 메시지:" +
            JSON.stringify(error)
        );
      });
  };

  return (
    <div>
      <LoginBox>
        <Box>로그인</Box>
        <Box>
          <H5>이메일 주소(계정)</H5>
          <Email
            name="email"
            type="text"
            onChange={onChange}
            value={formState.email}
          />
        </Box>
        <Box>
          <H5>비밀번호</H5>
          <Password
            name="password"
            type="password"
            onChange={onChange}
            value={formState.password}
          />
        </Box>
        <FindPassword onClick={setModalIsOpenToTrue}>
          비밀번호를 잊어버리셨습니까?{" "}
        </FindPassword>
        <SignUp onClick={onSubmit}>로그인 하기</SignUp>
        <Modal isOpen={modalIsOpen} style={customStyles}>
          <ChangePassword modalToFalse={setModalIsOpenToFalse} /> 
        </Modal>
      </LoginBox>
    </div>
  );
};

export default Login;
