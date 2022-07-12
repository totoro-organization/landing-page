import styled from "styled-components";
import { device } from "../../theme/devices";

export const Layout = styled.div`
  --global-inner-spacing-section: 1rem;

  @media ${device.laptop} {
    --global-inner-spacing-section: 4rem 12rem;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  h1 {
    font-size: ${({ theme }) => theme.fonts.sizes.xl};
  }

  h2 {
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
  }
`;
