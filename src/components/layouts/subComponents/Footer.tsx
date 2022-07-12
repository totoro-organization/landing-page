import React from "react";
import styled from "styled-components";
import FooterPicture from "../../../assets/png/FooterPicture.png";

export default function Footer() {
  return (
    <>
      <StyledImage src={FooterPicture} alt="illustration bénévolat" />
      <Container>Footer</Container>
    </>
  );
}

const StyledImage = styled.img`
  width: 100%;
  max-height: 8rem;
  object-fit: cover;
`;

const Container = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: var(--global-inner-spacing-section);
  background-color: ${({ theme }) => theme.colors.core.black.base};
  color: ${({ theme }) => theme.colors.core.white.base};
`;
