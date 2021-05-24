import React, { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';

const HashTagBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

const Label = styled.label``;

const Input = styled.input`
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

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.li`
  margin-top: 0.5rem;
  padding: 5px 15px;
  border-radius: 30px;
  background-color: #3a78c0;
  color: #fff;
  font-size: 12px;
  margin-right: 1rem;
`;

const Close = styled.button`
  border: none;
  background-color: #3a78c0;
  color: #fff;
  outline: none;
  cursor: pointer;
  font-size: 12px;
`;

interface Props {
  hashtag?: string;
  onChange: (e: string) => void;
}

export default function HashTag({ hashtag, onChange }: Props): ReactElement {
  const [hashTagInput, setHashTagInput] = useState<string>('');
  const [tagList, setTagList] = useState<string[]>();

  useEffect(() => {
    setTagList(hashtag?.split('#').filter((e) => e !== ''));
  }, [hashtag]);

  function onAddHashTag(e: React.KeyboardEvent<HTMLInputElement>) {
    const isEnter: boolean = e.key === 'Enter';
    if (isEnter) {
      if (hashTagInput === '') {
        alert('값을 입력해주세요.');
        return false;
      }
      if (tagList) {
        if (tagList.length > 9) {
          alert('해시태그는 최대 10개까지 등록할 수 있습니다.');
          return false;
        }

        const newTag = e.currentTarget.value.replaceAll('#', '');
        if (tagList.find((tag) => tag === newTag)) {
          alert('동일한 태그가 존재합니다.');
          return false;
        }

        const newTagList = [...tagList, newTag];
        onChange(newTagList.join('#'));
        setHashTagInput('');
      }
    }
  }

  return (
    <HashTagBox>
      <Label htmlFor="">이벤트 해시태그</Label>
      <Input
        type="text"
        onKeyDown={onAddHashTag}
        value={hashTagInput}
        onChange={(e) => setHashTagInput(e.currentTarget.value)}
      />
      <TagList>
        {hashtag &&
          hashtag.split('#').map((tag, tagIndex) => (
            <Tag key={tagIndex}>
              <span>#</span>
              <span>{tag}</span>
              <Close
                onClick={() => {
                  onChange(
                    hashtag
                      .split('#')
                      .filter((_t, closeIndex) => tagIndex !== closeIndex)
                      .join('#'),
                  );
                }}
              >
                X
              </Close>
            </Tag>
          ))}
      </TagList>
    </HashTagBox>
  );
}