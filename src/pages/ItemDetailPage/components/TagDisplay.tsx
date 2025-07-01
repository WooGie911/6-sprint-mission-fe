import React from "react";
import styled from "styled-components";

const TagsDisplaySection = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[100]};
  color: ${({ theme }) => theme.colors.gray[900]};
  padding: 6px 16px;
  border-radius: 999px;
  font-size: 16px;
`;

interface TagDisplayProps {
  tags: string[];
}

const TagDisplay: React.FC<TagDisplayProps> = ({ tags }) => {
  if (!tags || tags.length === 0) return null;

  return (
    <TagsDisplaySection>
      {tags.map((tag) => (
        <Tag key={tag}>#{tag}</Tag>
      ))}
    </TagsDisplaySection>
  );
};

export default TagDisplay;
