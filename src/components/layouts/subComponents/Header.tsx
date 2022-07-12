import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../../theme/devices";
import Box from "../../base/Box";
import TotoroLogo from "../../brand/TotoroLogo";

const navLinks = [
  {
    to: "/",
    label: "Notre solution",
  },
  {
    to: "/become-partner",
    label: "Devenir partenaire",
  },
];

export default function Header() {
  const { pathname } = useLocation();

  return (
    <Container>
      <TotoroLogo />

      <Box display="grid" gridAutoFlow="column" gap={1}>
        {navLinks.map(({ to, label }) => (
          <LinkStyled $isActive={pathname === to} key={label} to={to}>
            {label}
          </LinkStyled>
        ))}
      </Box>
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  display: flex;
  gap: 1rem;
  padding: var(--global-inner-spacing-section);
  background-color: ${({ theme }) => theme.colors.core.black.base};
  position: fixed;
  color: ${({ theme }) => theme.colors.core.white.base};

  @media ${device.tablet} {
    gap: 4rem;
  }
`;

const LinkStyled = styled(Link)<{ $isActive: boolean }>`
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.core.white.base : theme.colors.v1.grey[500]};
`;
