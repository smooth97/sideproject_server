import React, { ReactElement, useState } from 'react';
import styled, { css } from 'styled-components';

const selectHeight = 40;

const Text = styled.div`
  height: ${selectHeight}px;
  line-height: ${selectHeight}px;
  padding: 0 10px;
  border: 1px solid #bcbcbc;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    border: 1px solid #333;
    transition: all 0.3s;
  }
`;

const Container = styled.div`
  padding-bottom: 10px;
`;

const Label = styled.div``;

const ErrorMessage = styled.p`
  color: #f00;
`;

const SelectBox = styled.div`
  position: relative;
  margin-top: 3px;
`;

const List = styled.ul<{ show: boolean }>`
  position: absolute;
  top: ${selectHeight}px;
  overflow: hidden;
  max-height: fit-content;
  z-index: 100;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  ${({ show }) => {
    if (!show) {
      return css`
        max-height: 0;
      `;
    }
  }}
  box-shadow: 0 0 7px rgba(0,0,0,0.1);
`;

const Item = styled.li`
  height: ${selectHeight}px;
  line-height: ${selectHeight}px;
  padding: 0 10px;
  &:hover {
    background-color: #eee;
  }
`;

interface Option {
  id: number;
  value: string;
}

interface Props {
  label?: string;
  items: Option[];
  onChange: (e: Option) => void;
  error?: string;
}

export default function Select({
  label,
  items,
  onChange,
  error,
}: Props): ReactElement {
  const [show, setShow] = useState<boolean>(false);
  const [item, setItem] = useState<Option>();

  function onClick(item: Option) {
    setShow(false);
    setItem(items.find((e) => e.id === item.id));
    onChange(item);
  }

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <SelectBox>
        <Text onClick={(e) => setShow(true)}>
          {item ? item?.value : items[0].value}
        </Text>
        <List show={show}>
          {items.map((item) => (
            <Item
              key={item.id}
              onClick={() => {
                onClick(item);
              }}
            >
              {item.value}
            </Item>
          ))}
        </List>
      </SelectBox>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
}