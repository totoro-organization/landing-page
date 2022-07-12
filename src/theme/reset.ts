// NOTE: This CSS reset is heavily inspired by Josh Comeau's post: https://www.joshwcomeau.com/css/custom-css-reset/.

import { css } from "styled-components";

export const Reset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box; // Use a more-intuitive box-sizing model.
  }
  * {
    margin: 0; // Remove default margin.
    padding: 0;
  }
  html,
  body {
    height: 100%; // Allow percentage-based heights in the application.
  }
  body {
    line-height: 1.5; // Add accessible line-height.
    -webkit-font-smoothing: antialiased; // Improve text rendering.
  }
  // Improve media defaults.
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    font: inherit; // Remove built-in form typography styles.
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word; // Avoid text overflows.
  }
  a {
    text-decoration: none;
  }
  #root,
  #__next {
    isolation: isolate; // Create a root stacking context.
  }
`;
