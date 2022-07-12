import React from "react";
import styled from "styled-components";

export default function OrganizationPartners() {
  return (
    <Container>
      <h2>Les associations qui nous font confiance</h2>

      {/* TODO: Add logo partners */}
      <PartnersList>
        <div
          style={{ width: "8rem", height: "3rem", backgroundColor: "grey" }}
        />
        <div
          style={{ width: "8rem", height: "3rem", backgroundColor: "grey" }}
        />
        <div
          style={{ width: "8rem", height: "3rem", backgroundColor: "grey" }}
        />
        <div
          style={{ width: "8rem", height: "3rem", backgroundColor: "grey" }}
        />
        <div
          style={{ width: "8rem", height: "3rem", backgroundColor: "grey" }}
        />
      </PartnersList>
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
  background-color: ${({ theme }) => theme.colors.core.black.base};

  h2 {
    color: ${({ theme }) => theme.colors.core.white.base};
  }
`;

const PartnersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
