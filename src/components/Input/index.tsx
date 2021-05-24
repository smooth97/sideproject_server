import React, { ReactElement } from 'react';
import styled from 'styled-components';

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

const Label = styled.label``;

const Text = styled.input`
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

const ErrorMessage = styled.p`
  color: #f00;
`;

interface Props {
  id?: string;
  error?: string;
  type: string;
  name: string;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  id,
  error,
  type,
  name,
  label,
  value,
  onChange,
}: Props): ReactElement {
  return (
    <InputBox>
      {label && <Label>{label}</Label>}
      <Text type={type} id={id} name={name} value={value} onChange={onChange} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputBox>
  );
}