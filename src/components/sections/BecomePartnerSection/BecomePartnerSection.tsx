import React from "react";
import styled from "styled-components";
import Button from "../../base/Button";

export default function BecomePartnerSection() {
  return (
    <Container>
      <h2>Construisons ensemble !</h2>

      <p>
        Nous cherchons actuellement des associations et boutiques commerciales
        (locale ou enseigne) pour travailler de pair avec Totoro.
        <br />
        Le but pour nous est de proposer à nos utilisateurs des missions de
        bénévolats qualitatives en échange de petits avantages.
      </p>

      <Button to="/become-partner" reloadDocument>
        En savoir plus
      </Button>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: var(--global-inner-spacing-section);
  background-color: ${({ theme }) => theme.colors.v1.grey[100]};

  p {
    color: ${({ theme }) => theme.colors.v1.grey[500]};
    text-align: center;
  }
`;
