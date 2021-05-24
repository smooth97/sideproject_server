import React, { ReactElement, useState } from "react";
import styled, { css } from "styled-components";

const Checkbox = styled.input`
  margin: 0 5%;
  cursor: pointer;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

const Label = styled.label`
  margin-bottom: 3px;
  font-size: 14px;
`;

const CheckLabel = styled.label`
  margin-left: auto;
  cursor: pointer;
  padding-bottom: 2px;
`;

const Text = styled.input`
  padding: 9px 61px 9px 13px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  outline: none;
  border: none;
  width: 60%;
  border: 1px solid #bcbcbc;
  margin: -1px;
  border-radius: 0 3px 3px 0;
  outline: none;
  &:focus {
    border: 1px solid #333;
    transition: all 0.3s;
  }
`;

const ErrorMessage = styled.p`
  color: #f00;
`;

const HBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #bcbcbc;
  border-radius: 3px;
`;

const Suffix = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  padding: 9px 13px;
  background-color: #eee;
`;

interface Props {
  suffix?: string;
  error?: string;
  onChange: (price: number) => void;
}

export default function TicketPrice({
  suffix,
  error,
  onChange,
}: Props): ReactElement {
  const [price, setPrice] = useState(0);
  const [disabled, setDisabled] = useState(true);

  function onCheck(e: React.ChangeEvent<HTMLInputElement>) {
    setPrice(0);
    onChange(0);
    setDisabled(!e.currentTarget.checked);
  }

  function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    const newPrice = Number(e.currentTarget.value);
    if(newPrice >= 0){
      setPrice(newPrice);
      onChange(newPrice);
    }
  }

  return (
    <InputBox>
      <Label>티켓 가격</Label>
      <HBox>
        <CheckLabel htmlFor="price">유료 티켓</CheckLabel>
        <Checkbox type="checkbox" id="price" onChange={onCheck} />
        <Text type="number" name="price" value={price} onChange={onChangeInput} disabled={disabled}/>
        <Suffix>{suffix}</Suffix>
      </HBox>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputBox>
  );
}
