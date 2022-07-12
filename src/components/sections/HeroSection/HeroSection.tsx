import React, { ReactNode } from "react";
import styled from "styled-components";
import { device } from "../../../theme/devices";

type HeroSectionProps = {
  title: string;
  description?: string;
  button: ReactNode;
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

      {button}
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing[4]};
  align-items: center;
  align-content: center;
  justify-items: center;
  background-color: ${({ theme }) => theme.colors.core.black.base};
  color: ${({ theme }) => theme.colors.core.white.base};
  padding: var(--global-inner-spacing-section);
  text-align: center;
  height: 80vh;

  @media ${device.tablet} {
    height: 36rem;
    grid-gap: ${({ theme }) => theme.spacing[8]};
  }
`;
