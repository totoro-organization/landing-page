import React, { PropsWithChildren } from "react";
import { Link, LinkProps } from "react-router-dom";
import styled, { css } from "styled-components";

export type ButtonProps = PropsWithChildren<{} & LinkProps>;

// TODO: Add outlined variant
export default function Button({ children, ...rest }: ButtonProps) {
  // NOTE: It's commented while waiting to see if we need a button
  //       with click events and not a redirection to a page.
  //
  //   if ("to" in rest) {
  //     return <StyledLink {...rest}>{children}</StyledLink>;
  //   } else {
  //     return <StyledButton>{children}</StyledButton>;
  //   }

  return <StyledLink {...rest}>{children}</StyledLink>;
}

const buttonStyles = css`
  all: unset;
  box-sizing: border-box;
  width: fit-content;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.brand.primary.base};
  color: ${({ theme }) => theme.colors.core.white.base};
  border-radius: ${({ theme }) => theme.border.radius.md};
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[6]};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.brand.primary.dark};
  }
`;

const StyledLink = styled(Link)`
  ${buttonStyles}
`;

// const StyledButton = styled.button`
//   ${buttonStyles}
// `;
