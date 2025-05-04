import { createStitches } from "@stitches/react";

const { styled } = createStitches({
  media: {
    bp1: "(min-width: 540px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
  },
});

export { styled };
