import React, { ReactNode } from "react";
import styled from "styled-components";

type HeroSectionProps = {
  title: string;
  description?: string;
  button?: ReactNode;
};

export default function HeroSection({
  title,
  description,
  button,
}: HeroSectionProps) {
  return (
    <Container>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </Container>
  );
}

const Container = styled.section`
  --global-inner-spacing-section: 1rem;

  width: 100%;
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.colors.core.black.base};
  color: ${({ theme }) => theme.colors.core.white.base};
  padding: var(--global-inner-spacing-section);
`;
