// NOTE: Spacer component inspired by Josh Comeau's snippet (https://www.joshwcomeau.com/snippets/react-components/spacer/)

import styled from "styled-components";

type Props = {
  axis: "horizontal" | "vertical";
  size: number;
  display?: "block" | "inline-block";
};

function getHeight({ axis, size }: Props) {
  return axis === "horizontal" ? 1 : `${size}em`;
}

function getWidth({ axis, size }: Props) {
  return axis === "vertical" ? 1 : `${size}em`;
}

function getDisplay({ display }: Props) {
  return display || "block";
}

/**
 * @param size expressed in em units (1em = 16px)
 * @param axis 'horizontal' | 'vertical' is the direction of spacing
 */
export default styled.span`
  display: ${getDisplay};
  width: ${getWidth};
  min-width: ${getWidth};
  height: ${getHeight};
  min-height: ${getHeight};
`;
