import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { Controller, FieldValues, useForm } from "react-hook-form";
import InputItem from "../../components/InputItem";
import TagInput from "../../components/TagInput";
import { getProduct, patchProduct } from "../../api/products";
import TextareaItem from "../../components/TextareaItem";
import Button from "../../components/Button";
import ImageUpload from "../../components/ImageUpload";
import { Product } from "../../../types";
import PageContainer from "./components/PageContainer";
import SectionTitle from "./components/SectionTitle";

interface ProductFormValue extends FieldValues {
  name: string;
  description: string;
  price: number;
  images: string[];
  tags: string[];
}

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

function pickFormValues(product: Product): ProductFormValue {
  const { name, description, price, images, tags } = product;
  const formValues = { name, description, price, images, tags };
  return formValues;
}

const EditItemPage: React.FC = () => {
  const navigate = useNavigate();
  const { itemId: productId } = useParams<{ itemId: string }>();
  const { data } = useQuery<Product, Error>({
    queryKey: ["products", productId],
    queryFn: () => getProduct(productId as string),
    enabled: !!productId,
  });
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<ProductFormValue>({
    mode: "onBlur",
  });

  const onSubmit = async (data: ProductFormValue) => {
    try {
      const result = await patchProduct(productId as string, data);
      navigate(`/items/${result.id}`);
    } catch (error) {
      console.error("상품 수정 실패:", error);
    }
  };

  useEffect(() => {
    if (data) {
      const formValue = pickFormValues(data);
      reset(formValue);
    }
  }, [data, reset]);

  if (!data) return null;

  return (
    <PageContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TitleSection>
          <SectionTitle>상품 수정하기</SectionTitle>
          <Button type="submit" disabled={!isValid}>
            등록
          </Button>
        </TitleSection>

        <InputSection>
          <Controller
            name="images"
            control={control}
            render={({ field: { onChange, value } }) => (
              <ImageUpload
                id="images"
                label="상품 이미지"
                value={value}
                onChange={onChange}
              />
            )}
          />
          <InputItem
            id="name"
            label="상품명"
            placeholder="상품명을 입력해 주세요"
            error={errors.name?.message}
            register={register("name", {
              required: "",
              minLength: {
                value: 2,
                message: "2자 이상 10자 이내로 입력해주세요",
              },
              maxLength: {
                value: 10,
                message: "2자 이상 10자 이내로 입력해주세요",
              },
            })}
          />

          <TextareaItem
            id="description"
            label="상품 소개"
            error={errors.description?.message}
            placeholder="상품 소개를 입력해 주세요"
            register={register("description", {
              required: "",
              minLength: {
                value: 10,
                message: "10자 이상 입력해주세요.",
              },
            })}
          />

          <InputItem
            id="price"
            label="판매 가격"
            error={errors.price?.message}
            placeholder="판매 가격을 입력해 주세요"
            register={register("price", {
              validate: (v) =>
                /^\d+$/.test(v.toString()) || "숫자로 입력해 주세요.",
              valueAsNumber: true,
            })}
          />

          <Controller
            name="tags"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TagInput value={value} onChange={onChange} />
            )}
          />
        </InputSection>
      </form>
    </PageContainer>
  );
};

export default EditItemPage;
