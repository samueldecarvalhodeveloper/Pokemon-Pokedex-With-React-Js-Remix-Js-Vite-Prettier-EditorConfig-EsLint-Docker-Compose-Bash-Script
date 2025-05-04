import { styled } from "../../stitches.config";

const Styles = styled("section", {
  width: "100%",
  minHeight: "100%",
  padding: "32rem 0rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "@bp1": {
    padding: "32rem 32rem",
  },

  ".content": {
    width: "100%",
    maxWidth: "691rem",
    background: "#FFF2F2",
    border: "1rem solid #BFACAC",
    borderRadius: "16rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column nowrap",
    gap: "32rem",
    padding: "32rem",
  },

  ".description": {
    color: "#0F0000",
    textAlign: "center",
  },

  ".return_link": {
    color: "#0F0000",
    fontWeight: "900",
    lineHeight: "150%",
    padding: "14rem",
  },

  ".return_link:hover": {
    color: "#0F0000",
    fontWeight: "900",
    lineHeight: "150%",
    padding: "14rem",
    textDecoration: "none",
  },
});

export default Styles;
