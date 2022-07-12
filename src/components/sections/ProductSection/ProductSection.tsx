import React, { ReactNode } from "react";
import styled from "styled-components";
import { device } from "../../../theme/devices";
import Box from "../../base/Box";

export type ProductSectionProps = {
  direction?: "left" | "right";
  title: string;
  description: string;
  button: ReactNode;
};

export default function ProductSection({
  direction = "right",
  title,
  description,
  button,
}: ProductSectionProps) {
  return (
    <Container $direction={direction}>
      <Box display="grid" gap={2}>
        <h2>{title}</h2>
        <p>{description}</p>

        {button}
      </Box>

      <div
        style={{ minWidth: "40rem", height: "20rem", backgroundColor: "red" }}
      >
        Ajouter image
      </div>
    </Container>
  );
}

const Container = styled.section<{ $direction?: "left" | "right" }>`
  width: 100%;
  padding: var(--global-inner-spacing-section);
  display: flex;
  flex-direction: column;
  gap: 4rem;

  p {
    color: ${({ theme }) => theme.colors.v1.grey[500]};
  }

  @media ${device.laptop} {
    display: flex;
    justify-content: space-between;
    flex-direction: ${({ $direction }) =>
      $direction === "right" ? "row" : "row-reverse"};
  }
`;