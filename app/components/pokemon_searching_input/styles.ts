import { styled } from "../../stitches.config";

const Styles = styled("div", {
  width: "100%",
  maxWidth: "430rem",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexFlow: "column nowrap",
  gap: "4rem",
  marginBottom: "48rem",

  ".label": {
    fontSize: "14rem",
    fontWeight: "500",
    color: "#BFACAC",
    position: "relative",
    left: "14rem",
  },

  ".input": {
    width: "100%",
    background: "#FFF2F2",
    border: "1rem solid #BFACAC",
    fontSize: "16rem",
    fontWeight: "600",
    padding: "8rem 16rem",
    borderRadius: "6rem",
    color: "#0F0000",
  },
});

export default Styles;
