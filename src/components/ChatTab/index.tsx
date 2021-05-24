import React, { ReactElement } from "react";
import { useRecoilValue } from "recoil";
import styled, { css } from "styled-components";
import { IMessage } from "../../schemas/types";
import { userState } from "../../store/state";
import moment from "moment";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 auto;
`;

const View = styled.ul`
  max-height: calc(100vh - 200px);
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const MessageBox = styled.div<{ me: boolean | undefined }>`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin-right: auto;
  padding: 0 20px;
  margin: 30px 0;
  ${({ me }) => {
    if (me) {
      return css`
        flex-direction: row-reverse;
        text-align: left;
        margin-left: auto;
      `;
    }
  }}
`;

const ImageBox = styled.div`
  position: relative;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  overflow: hidden;
  flex: 0 auto;
  margin: 0 10px;
`;

const Image = styled.img`
  width: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Content = styled.div`
  box-shadow: 0 0 7px rgba(0,0,0,0.1);
  padding: 10px;
  border-radius: 5px;
  margin-top: 5px;
  background-color: #86BB71;
  color: #fff;
  padding: 18px 20px;
  font-size: 16px;
`;

const Name = styled.div``;
const Text = styled.div``;
const Time = styled.span``;

const ContentHeader = styled.div<{ me: boolean | undefined }>`
  display: flex;
  flex-direction: row;
  span {
    margin-left: 10px;
  }
  ${({ me }) => {
    if (me) {
      return css`
        flex-direction: row-reverse;
        span {
          margin-left: 0px;
          margin-right: 10px;
        }
        & + div {
          background-color: #94C2ED;
        }
      `;
    }
  }}
`;

const ChatTextArea = styled.textarea`
  resize: none;
  flex: 1 auto;
  outline: none;
  padding: 10px 15px;
  border: none;
  border-top: 1px solid #bcbcbc;
`;

interface Props {
  messageList: IMessage[];
}

export default function ChatTab({ messageList }: Props): ReactElement {
  const user = useRecoilValue(userState);
  return (
    <Wrapper>
      <View>
        {messageList.map((message) => (
          <MessageBox key={message.id} me={user?.email === message.user.email}>
            <ImageBox>
              <Image src={message.user.thumbnail} alt="" />
            </ImageBox>
            <ContentBox>
              <ContentHeader me={user?.email === message.user.email}>
                <Name>{`${message.user.firstName} ${message.user.lastName}`}</Name>
                <Time>{moment(message.time).format("HH:MM")}</Time>
              </ContentHeader>
              <Content>
                <Text>{message.content}</Text>
              </Content>
            </ContentBox>
          </MessageBox>
        ))}
      </View>
      <ChatTextArea></ChatTextArea>
    </Wrapper>
  );
}
