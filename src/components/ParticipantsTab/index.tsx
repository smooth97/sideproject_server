import React, { ReactElement, useState } from "react";
import styled, { css } from "styled-components";
import { User } from "../../schemas/types";
import MessageIcon from "@material-ui/icons/Message";
import DuoIcon from "@material-ui/icons/Duo";
import Select from "../Select";
import Input from "../Input";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 auto;
`;

const View = styled.div`
  height: calc(100vh - 200px);
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const ParticipantList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Participant = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  padding: 1rem 1.5rem;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
    transition: all 0.3s;
  }
`;

const ImageBox = styled.div`
  position: relative;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  overflow: hidden;
  border: 1px solid #dbdbdb;
`;

const Image = styled.img`
  width: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Name = styled.div`
  text-align: center;
  flex: 1 auto;
`;

const Institution = styled.div`
  text-align: center;
  flex: 1 auto;
`;

const RequestMeeting = styled.div`
  flex: 0 auto;
  display: flex;
  &:hover {
    svg {
      color: #1f54ff;
      transition: all 0.3s;
    }
  }
`;

const PopupLayout = styled.div`
  z-index: 500;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const PopupContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
  padding: 30px;
  border-radius: 10px;
`;
const InnerPopupContainer = styled.div`
  position: absolute;
  right: 30px;
  bottom: 30px;
  background-color: #fff;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
  padding: 30px;
  border-radius: 10px;
`;

const RequestImage = styled.img<{ size: string }>`
  margin-right: 30px;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  ${({ size }) => {
    if (size) {
      return css`
        height: ${size}px;
      `;
    }
  }}
`;

const RequestName = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

const RequestEmail = styled.div`
  padding: 10px 0;
`;

const RequestInstitution = styled.div`
  width: 50%;
`;

const RequestPosition = styled.div`
  width: 50%;
`;

const RequestContent = styled.textarea`
  resize: none;
  width: 400px;
  outline: none;
  border: 1px solid #bcbcbc;
  border-radius: 3px;
  padding: 10px;
  flex: 1 auto;
  margin-top: 20px;
`;

const Button = styled.div<{ type?: string | undefined }>`
  display: flex;
  margin-top: 20px;
  margin-left: auto;
  background-color: #fff;
  color: #333;
  border: 1px solid #333;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
  align-items: center;
  font-size: 14px;
  & > svg {
    margin-right: 10px;
  }
  &:last-child {
    margin-left: 20px;
  }
  ${({ type }) => {
    if (type === "primary") {
      return css`
        background-color: #333;
        color: #fff;
      `;
    }
  }}
`;

const HBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const VBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const InnerPopupImageBox = styled.div`
  padding-bottom: 10px;
`;

const InnerPopupTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: auto;
`;

const SearchBox = styled.div`
  display: flex;
  flex: 1 auto;
  padding: 0 1.5rem;
  align-items: center;
`;

const SearchInput = styled.input`
  flex: 1 auto;
  border-radius: 3px;
  padding: 9px 13px;
  border: 1px solid #bcbcbc;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  outline: none;
  margin-top: 3px;
  &:focus {
    border: 1px solid #333;
    transition: all 0.3s;
  }
`;

interface Props {
  participantList: User[];
  onSearch: (value: string) => void;
}

export default function ParticipantsTab({
  participantList,
  onSearch,
}: Props): ReactElement {
  const [selectedUser, setSelectedUser] = useState<User>();
  const [isShowInnerPopup, setIsShowInnerPopup] = useState<boolean>(false);
  const [isShowPopup, setIsShowPopup] = useState<boolean>(false);
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  return (
    <>
      <Wrapper>
        <SearchBox>
          <SearchInput
            type="text"
            value={searchKeyword}
            onChange={(e) => {
              const value = e.currentTarget.value;
              setSearchKeyword(value);
              onSearch(value);
            }}
          />
        </SearchBox>
        <View>
          <ParticipantList>
            {participantList.map((participant) => (
              <Participant
                key={participant.id}
                onClick={() => {
                  setSelectedUser(participant);
                  setIsShowPopup(true);
                }}
              >
                <ImageBox>
                  <Image src={participant.thumbnail} />
                </ImageBox>
                <Name>{`${participant.firstName} ${participant.lastName}`}</Name>
                <Institution>{participant.institution}</Institution>
                <RequestMeeting
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedUser(participant);
                    setIsShowInnerPopup(true);
                  }}
                >
                  <MessageIcon />
                </RequestMeeting>
              </Participant>
            ))}
          </ParticipantList>
        </View>
      </Wrapper>

      {(isShowPopup || isShowInnerPopup) && (
        <PopupLayout>
          {isShowPopup && (
            <PopupContainer>
              <HBox>
                <RequestImage size="200" src={selectedUser?.thumbnail} alt="" />
                <VBox>
                  <RequestName>{`${selectedUser?.firstName} ${selectedUser?.lastName}`}</RequestName>
                  <RequestEmail>{selectedUser?.email}</RequestEmail>
                  <HBox>
                    <RequestInstitution>
                      {selectedUser?.institution}
                    </RequestInstitution>
                    <RequestPosition>{selectedUser?.position}</RequestPosition>
                  </HBox>
                  <RequestContent></RequestContent>
                </VBox>
              </HBox>
              <HBox>
                <Button onClick={() => setIsShowInnerPopup(true)}>
                  <DuoIcon />
                  <span>화상 미팅 요청하기</span>
                </Button>
                <Button type="primary" onClick={() => setIsShowPopup(false)}>
                  확인
                </Button>
              </HBox>
            </PopupContainer>
          )}
          {isShowInnerPopup && (
            <InnerPopupContainer>
              <HBox>
                <InnerPopupImageBox>
                  <RequestImage
                    size="100"
                    src={selectedUser?.thumbnail}
                    alt=""
                  />
                </InnerPopupImageBox>
                <VBox>
                  <InnerPopupTitle>{`${selectedUser?.firstName} ${selectedUser?.lastName} 님께 대화를 요청하겠습니다.`}</InnerPopupTitle>
                  <Select
                    items={[
                      { id: 1, value: "5분" },
                      { id: 2, value: "10분" },
                      { id: 3, value: "15분" },
                    ]}
                    onChange={() => {}}
                  />
                </VBox>
              </HBox>
              <HBox>
                <Button onClick={() => setIsShowInnerPopup(false)}>취소</Button>
                <Button
                  type="primary"
                  onClick={() => setIsShowInnerPopup(false)}
                >
                  대화 요청
                </Button>
              </HBox>
            </InnerPopupContainer>
          )}
        </PopupLayout>
      )}
    </>
  );
}
