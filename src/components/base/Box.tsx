import React from "react";
import styled from "styled-components";

type BoxProps = {
  children: React.ReactNode;
  display?: "flex" | "block" | "grid" | "none";
  position?: "absolute" | "relative" | "static";
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  alignItems?: Position;
  alignContent?: Position;
  justifyContent?: JustifySpace;
  justifyItems?: Position;
  placeItems?: PlaceItems;
  gridAutoFlow?: Flow;
  height?: string;
  width?: string;
  padding?: number;
  margin?: number;
  gap?: number;
  className?: string;
  as?: SemanticContainerTag;
};

/**
 *
 * @param position 'absolute' | 'relative' | 'static'
 * @param display 'flex' | 'block' | 'grid | 'none'
 * @param flexDirection 'row' | 'row-reverse' | 'column' | 'column-reverse'
 * @param alignItems 'flex-start' | 'center' | 'flex-end'
 * @param alignContent 'flex-start' | 'center' | 'flex-end'
 * @param justifyContent 'space-around' | 'space-between' | 'space-evenly' | 'center'
 * @param justifyItems 'flex-start' | 'center' | 'flex-end'
 * @param placeItems 'start' | 'center' | 'end'
 * @param height string, for flexible CSS units
 * @param width string, for flexible CSS units
 * @param padding number, in `em`
 * @param margin number, in `em`
 * @param gap number, in `em`
 * @param gridAutoFlow 'row' | 'column' | 'dense' | 'row dense' | 'column dense'
 * @param as string, polymorphic prop for the semantic tag to be rendered
 */
export default function Box(props: BoxProps) {
  const { children } = props;

  return <StyledBox {...props}>{children}</StyledBox>;
}

const StyledBox = styled.div<BoxProps>`
  display: ${(props) => props.display || "block"};
  position: ${(props) => props.position || "static"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems || null};
  align-content: ${(props) => props.alignContent || null};
  justify-content: ${(props) => props.justifyContent || null};
  justify-items: ${(props) => props.justifyItems || null};
  place-items: ${(props) => props.placeItems || null};
  height: ${(props) => `${props.height}` || null};
  width: ${(props) => `${props.width}` || null};
  padding: ${(props) => `${props.padding}em` || null};
  margin: ${(props) => `${props.margin}em` || null};
  gap: ${(props) => `${props.gap}em` || null};
  grid-auto-flow: ${(props) => `${props.gridAutoFlow}` || null};
`;

type Position = "flex-start" | "center" | "flex-end";
type JustifySpace =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-around"
  | "space-between"
  | "space-evenly";
type PlaceItems = "start" | "center" | "end";
type Flow = "row" | "column" | "dense" | "row dense" | "column dense";
type SemanticContainerTag =
  | "aside"
  | "section"
  | "header"
  | "footer"
  | "main"
  | "article"
  | "nav";
