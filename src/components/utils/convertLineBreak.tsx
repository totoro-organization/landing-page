import { Fragment } from "react";
import Spacer from "../base/Spacer";

export default function convertLineBreaks(
  paragraph: string,
  withSpacing: boolean
) {
  return paragraph?.split("\n").flatMap((text: string, i: number) => [
    i > 0 && (
      <Fragment key={i}>
        <br />
        {withSpacing && <Spacer axis="vertical" size={1} />}
      </Fragment>
    ),
    text,
  ]);
}
