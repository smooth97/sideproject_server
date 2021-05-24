import React, { useState } from 'react';
import styled from 'styled-components';
import {
  characterValidation,
  confirmPasswordValidation,
  emailValidation,
  passwordValidation
} from '../../utils/validate';
import * as API from '../../apis';

const JoinBox = styled.div`
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  width: 600px;
  height: 500px;
  position: absolute;
  left: 30%;
  top: 18%;
`;

const NameBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 700px;
  height: 100px;
  margin-left: 70px;
`;

const Box = styled.div`
  display: flex-column;
  align-items:center;
  font-size: 20px;
  font-weight: bold;
  height: 75px;
  margin-bottom: 30px;
  &:nth-child(1){
    margin-bottom: 0px;
    margin-left: 10px;
    width: 200px;
    text-align: center;
  }
  &:nth-child(2){
    margin-bottom: 0px;
    margin-left: 40px;
    width: 200px;
    text-align: center;
  }
`;

const FirstName = styled.input`
  width: 200px;
  height: 40px;
  border: solid 1px #808080;
  border-radius:5px;
`;

const LastName = styled.input`
  width: 200px;
  height: 40px;
  border: solid 1px #808080;
  border-radius:5px;
`;

const Email = styled.input`
  width: 430px;
  height: 40px;
  border: solid 1px #808080;
  border-radius:5px;
  margin-bottom: 5px;
`;

const Password = styled.input`
  width: 430px;
  height: 40px;
  border: solid 1px #808080;
  border-radius:5px;
  margin-bottom: 5px;
`;

const ConfirmPassword = styled.input`
  width: 430px;
  height: 40px;
  border: solid 1px #808080;
  border-radius:5px;
  margin-bottom: 5px;
`;

const SignUp = styled.button`
  width: 430px;
  height: 40px;
  margin-top: 10px;
  font-size: 18px;
  background-color: #006CA7;
  color: white;
`;

const H3 = styled.h3`
  margin-left: 10px;
  margin-bottom: 30px;
  margin-block-start: 0;
  color: #000000;
`;

const Name = styled.h5`
  text-align: left;
  margin: 10px;
  font-weight: lighter;
`;

const H5 = styled.h5`
  text-align: left;
  padding-left: 80px;
  margin: 10px;
  font-weight: lighter;
`;

const ErrorMessage = styled.p`
  color: #f00;
  font-size: 12px;
  text-align: left;
  margin-left: 85px;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-bottom: 10px;
  width: 210px;
`;

const NameErrorMessage = styled.p`
  color: #f00;
  font-size: 12px;
  text-align: left;
  margin-left: 0px;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-bottom: 10px;
  width: 210px;
`;

const Join = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
    
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState('');
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState('');
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({...formState, [name]: value});
  }

  const onSubmitForm = function(){
    const name = formState.firstName + " " + formState.lastName;
    setEmailErrorMessage('');
    setFirstNameErrorMessage('');
    setLastNameErrorMessage('');
    setPasswordErrorMessage('');
    setConfirmPasswordErrorMessage('');

    const firstNameMessage = characterValidation(formState.firstName);

    if(firstNameMessage !== ''){
      setFirstNameErrorMessage(firstNameMessage);
      return false;
    }

    const lastNameMessage = characterValidation(formState.lastName);

    if(lastNameMessage !== ''){
      setLastNameErrorMessage(lastNameMessage);
      return false;
    }


    const emailMessage = emailValidation(formState.email);

    if(emailMessage !== ''){
      setEmailErrorMessage(emailMessage);
      return false;
    }

    const passwordMessage = passwordValidation(formState.password);
        
    if(passwordMessage !== '') {
      setPasswordErrorMessage(passwordMessage);
      return false;
    }

    const confirmPasswordMessage = confirmPasswordValidation(formState.password, formState.confirmPassword);

    if(confirmPasswordMessage !== ''){
      setConfirmPasswordErrorMessage(confirmPasswordMessage);
      return false;
    }
    
    // 회원가입(signup)
    API.signup({name, email:formState.email, password:formState.password})
    .then(json => {
      if (json.error)
        throw json;
        
      alert("회원가입을 성공적으로 마쳤습니다. 로그인해주세요!");
      window.location.href = "/login";
    })
    .catch((error) => {
      alert("서버 오류 발생! 잠시후 다시 시도해주세요. 메시지:"+JSON.stringify(error));
    });
  };

  return (
    <div>
      <JoinBox>
        <H3>회원가입</H3>
        <NameBox>
          <Box><Name>이름(first name)</Name>
            <FirstName type="text" name="firstName" onChange={onChange} value={formState.firstName} />
            {firstNameErrorMessage !== '' &&
            <NameErrorMessage>{firstNameErrorMessage}</NameErrorMessage>}
          </Box>
          <Box><Name>성(last name)</Name>
            <LastName type="text" name="lastName" onChange={onChange} value={formState.lastName} />
            {lastNameErrorMessage !== '' &&
            <NameErrorMessage>{lastNameErrorMessage}</NameErrorMessage>}
          </Box>
        </NameBox>
        <Box><H5>이메일 주소(계정)</H5>
          <Email type="email" name="email" onChange={onChange} value={formState.email} />
          {emailErrorMessage !== '' &&
          <ErrorMessage>{emailErrorMessage}</ErrorMessage>}
        </Box>
        <Box><H5>비밀번호</H5>
          <Password type="password" name="password" onChange={onChange} value={formState.password} />
          {passwordErrorMessage !== '' &&
          <ErrorMessage>{passwordErrorMessage}</ErrorMessage>}
        </Box>
        <Box><H5>비밀번호 확인</H5>
          <ConfirmPassword type="password" name="confirmPassword" onChange={onChange} value={formState.confirmPassword}/>
          {confirmPasswordErrorMessage !== '' &&
          <ErrorMessage>{confirmPasswordErrorMessage}</ErrorMessage>}
        </Box>
        <SignUp onClick={onSubmitForm}>회원 가입하기 </SignUp>  
      </JoinBox>
    </div>
  );
};

export default Join;