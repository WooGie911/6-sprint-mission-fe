import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InputItem from "../../components/InputItem";
import TagInput from "../../components/TagInput";
import { addProduct } from "../../api/products";
import TextareaItem from "../../components/TextareaItem";
import Button from "../../components/Button";
import ImageUpload from "../../components/ImageUpload";
import SectionTitle from "./components/SectionTitle";
import PageContainer from "./components/PageContainer";

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    gap: 24px;
  }
`;

interface FormValues {
  name: string;
  description: string;
  price: number;
  images: string[];
  tags: string[];
}

interface Errors {
  name?: string;
  description?: string;
  price?: string;
}

const AddItemPage: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const navigate = useNavigate();

  const validateName = (value: string) => {
    if (value.length < 2 || value.length > 10) {
      setErrors((prev) => ({
        ...prev,
        name: "2자 이상 10자 이내로 입력해주세요",
      }));
    } else {
      setErrors((prev) => ({ ...prev, name: undefined }));
    }
  };

  const validateDescription = (value: string) => {
    if (value.length < 10) {
      setErrors((prev) => ({
        ...prev,
        description: "10자 이상 입력해주세요.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, description: undefined }));
    }
  };

  const validatePrice = (value: string) => {
    if (!/^\d+$/.test(value)) {
      setErrors((prev) => ({ ...prev, price: "숫자로 입력해주세요." }));
    } else {
      setErrors((prev) => ({ ...prev, price: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.keys(errors).some((key) => errors[key as keyof Errors])) {
      return;
    }

    const productData: FormValues = {
      name,
      description,
      price: Number(price),
      tags,
      images,
    };

    try {
      const result = await addProduct(productData);
      navigate(`/items/${result.id}`);
    } catch (error) {
      console.error("상품 등록 실패:", error);
    }
  };

  return (
    <PageContainer>
      <form onSubmit={handleSubmit}>
        <TitleSection>
          <SectionTitle>상품 등록하기</SectionTitle>
          <Button
            type="submit"
            disabled={!name || !description || !price || !tags.length}
          >
            등록
          </Button>
        </TitleSection>

        <InputSection>
          <ImageUpload
            id="images"
            label="상품 이미지"
            value={images}
            onChange={setImages}
          />
          <InputItem
            id="name"
            label="상품명"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              validateName(e.target.value);
            }}
            placeholder="상품명을 입력해 주세요"
            error={errors.name}
          />

          <TextareaItem
            id="description"
            label="상품 소개"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              validateDescription(e.target.value);
            }}
            placeholder="상품 소개를 입력해 주세요"
            error={errors.description}
          />

          <InputItem
            id="price"
            label="판매 가격"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
              validatePrice(e.target.value);
            }}
            placeholder="판매 가격을 입력해 주세요"
            error={errors.price}
          />

          <TagInput value={tags} onChange={setTags} />
        </InputSection>
      </form>
    </PageContainer>
  );
};

export default AddItemPage;
