import React from "react";
import styled from "styled-components";
import EmmausSolidarite from "../../../assets/png/logo/EmmausSolidarite.png";
import PetitsFreresDesPauvres from "../../../assets/png/logo/PetitsFreresDesPauvres.png";
import SecoursPopParis from "../../../assets/png/logo/SecoursPopParis.png";
import ReglesElementaires from "../../../assets/png/logo/ReglesElementaires.png";
import { device } from "../../../theme/devices";

const organizationLogos = [
  {
    logo: EmmausSolidarite,
    alt: "Emmaus logo",
  },
  {
    logo: PetitsFreresDesPauvres,
    alt: "Petits freres des pauvres logo",
  },
  {
    logo: SecoursPopParis,
    alt: "Secours populaire de paris logo",
  },
  {
    logo: ReglesElementaires,
    alt: "Règles élementaires logo",
  },
];

export default function OrganizationPartners() {
  return (
    <Container>
      <h2>Les associations qui nous font confiance</h2>

      <PartnersList>
        {organizationLogos.map(({ logo, alt }, index) => (
          <img key={index} src={logo} alt={alt} />
        ))}
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
  align-items: center;
  gap: 1rem;

  @media ${device.laptop} {
    gap: 4rem;
  }
`;
