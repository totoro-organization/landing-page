import { createGlobalStyle } from "styled-components";

import { Reset } from "./reset";

export const GlobalStyle = createGlobalStyle`
  ${Reset}

  html {
    font-family: "Outfit";
  }

  h2 {
    color: ${({ theme }) => theme.colors.core.black.base};
  }
`;
