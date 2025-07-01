import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputItem from "./InputItem";
import DeleteButton from "./DeleteButton";

const TagButtonsSection = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[200]};
  color: ${({ theme }) => theme.colors.black};
  padding: 14px 14px 14px 16px;
  border-radius: 999px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100px;
`;

const TagText = styled.span`
  font-size: 16px;
  line-height: 24px;
  margin-right: 8px;
  max-width: calc(100% - 28px); // DeleteButton 너비 및 margin을 제외한 공간
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

interface TagInputProps {
  value: string[];
  onChange: (tags: string[]) => void;
}

const TagInput: React.FC<TagInputProps> = ({ value, onChange }) => {
  const [text, setText] = useState("");
  const [tags, setTags] = useState(value);
  const [error, setError] = useState("");

  // 중복 등록 막기 위해 tags 배열에 없는 것 확인하고 삽입
  const addTag = (tag: string) => {
    const nextTags = [...tags];
    if (!tags.includes(tag)) {
      nextTags.push(tag);
    }
    onChange(nextTags);
  };

  const removeTag = (tagToRemove: string) => {
    const nextTags = tags.filter((tag) => tag !== tagToRemove);
    onChange(nextTags);
  };

  // 엔터 키 누르면 tags 배열에 input 값을 추가
  const handlePressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing) return;

    const inputString = text.trim();
    if (event.key === "Enter") {
      event.preventDefault(); // 엔터 키 눌렀을 때 form이 제출되지 않도록 꼭 추가해 주세요!

      if (inputString && !error) {
        addTag(inputString);
        setText(""); // 태그 추가 후 input field 초기화
      }
    }
  };

  const validateTag = (newTag: string) => {
    if (newTag.length > 5) {
      setError("태그는 5글자 이내로 입력해주세요.");
    } else {
      setError("");
    }
  };

  useEffect(() => {
    setTags(value);
  }, [value]);

  return (
    <div>
      <InputItem
        label="태그"
        value={text}
        placeholder="태그를 입력해 주세요"
        onKeyDown={handlePressEnter}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setText(e.target.value);
          validateTag(e.target.value);
        }}
        error={error}
      />

      {/* tags 배열이 비어있으면 TagButtonsSection을 렌더링하지 않음 */}
      {tags?.length > 0 && (
        <TagButtonsSection>
          {tags.map((tag) => (
            <Tag key={`tag-${tag}`}>
              <TagText>{tag}</TagText>

              <DeleteButton
                onClick={() => removeTag(tag)}
                label={`${tag} 태그`}
              />
            </Tag>
          ))}
        </TagButtonsSection>
      )}
    </div>
  );
};

export default TagInput;
