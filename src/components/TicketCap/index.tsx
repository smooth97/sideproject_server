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
  padding: 9px 13px;
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

interface Props {
  error?: string;
  onChange: (cap: number) => void;
}

export default function TicketPrice({
  error,
  onChange,
}: Props): ReactElement {
  const [cap, setCap] = useState(0);
  const [disabled, setDisabled] = useState(false);

  function onCheck(e: React.ChangeEvent<HTMLInputElement>) {
    setCap(0);
    onChange(0);
    setDisabled(e.currentTarget.checked);
  }

  function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    const newCap = Number(e.currentTarget.value);
    if(newCap >= 0){
      setCap(newCap);
      onChange(newCap);
    }
  }

  return (
    <InputBox>
      <Label>티켓 발행수</Label>
      <HBox>
        <CheckLabel htmlFor="cap">무제한</CheckLabel>
        <Checkbox type="checkbox" id="cap" onChange={onCheck}/>
        <Text type="number" name="cap" value={cap} onChange={onChangeInput} disabled={disabled}/>
      </HBox>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputBox>
  );
}
