import React, {useState} from 'react'
import styled from 'styled-components';


const Box = styled.div`

display: inline-flex;
font-size: 20px;
font-weight: bold;
margin-bottom: 25px;

&:nth-child(5){
    margin-bottom: 3px;
}

&:nth-child(7){
    margin-top: 3px;
    margin-bottom: 3px;
}
`;

const Email = styled.input`
   
 width: 343px;
 height: 40px;
 border: solid 1px #808080;
 border-radius: 3px;

 &:nth-child(2){
    padding-left: 10px;
    font-size: 15px;
}


`;

const SecurityCode = styled.input`
   
 width: 343px;
 height: 40px;
 border: solid 1px #808080;
 border-radius: 3px;

 &:nth-child(2){
    padding-left: 10px;
    font-size: 15px;
}


`;

const NewPassword = styled.input`
   
 width: 350px;
 height: 40px;
 border: solid 1px #808080;
 border-radius: 3px;

 &:nth-child(2){
    padding-left: 10px;
    font-size: 15px;
}


`;


const ConfirmNewPassword = styled.input`
   
 width: 350px;
 height: 40px;
 border: solid 1px #808080;
 border-radius: 3px;

 &:nth-child(2){
    padding-left: 10px;
    font-size: 15px;
}


`;


const H3 = styled.h3`

text-align: center;
margin-bottom: 45px;
`;


const H5 = styled.h5`
text-align: left;
width: 150px;
margin-top: 10px;
margin-block-end: 0;
`;


const SendSecurityCode = styled.button`

width: 200px;
height: 40px;
font-size: 17px;
background-color: #006CA7;
color: white;
margin-bottom: 30px;
float: right;
margin-right: 50px;
`;


const ErrorMessage = styled.p`
  color: #f00;
  width: 400px;
  font-size: 12px;
  text-align: left;
  margin-left: 50px;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-bottom: 10px;
`;


const Submit = styled.button`

width: 200px;
height: 40px;
font-size: 17px;
background-color: #686868;
color: white;
margin-bottom: 15px;
margin-left: 50px;
`;

const PasswordBox = styled.div`

display: inline-flex;
flex-direction: column;
font-size: 20px;
font-weight: bold;
width: 356px;
height: 70px;
align-items: center;

`


interface Props{
    modalToFalse: Function
}

function ChangePassword ({ modalToFalse }: Props) {

        const [formState, setFormState] = useState({
            firstName: '',
            lastName: '',
            email: '',
            newPassword: '',
            confirmNewPassword: ''
        })
         
        
        const [newPasswordErrorMessage, setNewPasswordErrorMessage] = useState('');
        const [confirmNewPasswordErrorMessage, setConfirmNewPasswordErrorMessage] = useState('');

        const onChangeNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormState({... formState, ... { newPassword: e.currentTarget.value}})
        }
    
        const onChangeConfirmNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormState({... formState, ... { confirmNewPassword: e.currentTarget.value}})
        }


        
    function onSubmitForm(){


        const newPasswordMessage = newPasswordValidation(formState.newPassword);
        
        if(newPasswordMessage !== '') {
          setNewPasswordErrorMessage(newPasswordMessage);
          return false;
        }else{
            modalToFalse();
        }

        const confirmNewPasswordMessage = confirmNewPasswordValidation(formState.newPassword, formState.confirmNewPassword);

        if(confirmNewPasswordMessage !== ''){
            console.log(confirmNewPasswordMessage);
            setConfirmNewPasswordErrorMessage(confirmNewPasswordMessage);
            return false;
        }else{
            modalToFalse();
        }

    }

        return (
            <ul>
                 <H3>비밀번호 수정하기</H3> 
                 <Box><H5>이메일 주소(계정):</H5>
                    <Email />
                </Box>
                <SendSecurityCode>보안코드 보내기</SendSecurityCode> 
                <Box><H5>보안 코드:</H5>
                    <SecurityCode placeholder="등록한 이메일로 발송된 보안코드를 입력"/>
                </Box>
                <Box><H5>새 비밀번호:</H5>
                    <PasswordBox>
                        <NewPassword type="password" name="password" onChange={onChangeNewPassword} value={formState.newPassword} />
                        {newPasswordErrorMessage !== '' && <ErrorMessage>{newPasswordErrorMessage}</ErrorMessage>}
                    </PasswordBox>
                </Box>
                <Box><H5>비밀번호 확인:</H5>
                    <PasswordBox>
                    <ConfirmNewPassword type="password" name="confirmPassword" onChange={onChangeConfirmNewPassword} value={formState.confirmNewPassword} />
                    {confirmNewPasswordErrorMessage !== '' && <ErrorMessage>{confirmNewPasswordErrorMessage}</ErrorMessage>}
                    </PasswordBox>
                </Box>
                
                <Submit onClick={onSubmitForm}>변경 확인</Submit> 
                <Submit onClick={() => {
                    modalToFalse();
                }}>취소</Submit> 
            </ul>     
        )

}


const REGEX ={
    password: new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
}



function newPasswordValidation(value: string){

    if(!REGEX.password.test(value)){
        return '형식에 맞지 않습니다 (영문 대소문자, 특수문자, 숫자 포함 8자리 이상)';
    }else{
        return '';
    }
}

function confirmNewPasswordValidation(newPassword: string, confirmNewPassword: string){
    if(newPassword !== confirmNewPassword){
        return '비밀번호가 일치하지 않습니다.'
    }else{
        return '';
    }
}


export default ChangePassword;
