import 'react-datepicker/dist/react-datepicker.css';

import { ko } from 'date-fns/esm/locale';
import React, { ReactElement } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import styled from 'styled-components';

registerLocale('ko', ko);

const DatePickerBox = styled.div`
  display: flex;
  flex-direction: column;
  input {
    width: 100%;
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
  }
`;

const Label = styled.label`
  margin-bottom: 3px;
`;

const ErrorMessage = styled.p`
  color: #f00;
`;

interface Props {
  value: Date;
  onChange: (e: Date) => void;
  label?: string;
  minDate?: Date;
  maxDate?: Date;
  error?: string;
}

export default function DatePicker({
  value,
  onChange,
  label,
  minDate,
  maxDate,
  error,
}: Props): ReactElement {
  return (
    <DatePickerBox>
      {label && <Label>{label}</Label>}
      <ReactDatePicker
        selected={value}
        onChange={onChange}
        locale="ko"
        minDate={minDate}
        maxDate={maxDate}
        showTimeSelect
        dateFormat="yyyy/MM/dd, aa.h:mm"
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </DatePickerBox>
  );
}