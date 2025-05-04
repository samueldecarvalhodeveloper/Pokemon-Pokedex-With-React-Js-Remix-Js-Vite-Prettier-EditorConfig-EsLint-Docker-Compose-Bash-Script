import { styled } from "../../stitches.config";

const Styles = styled("div", {
  display: "flex",
  flexFlow: "column nowrap",
  gap: "8rem",

  ".navigation_buttons": {
    display: "flex",
    gap: "8rem",
  },

  ".navigation_buttons > button": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16rem",
    fontWeight: "900",
    background: "#FFF2F2",
    padding: "9rem",
    color: "#0F0000",
    borderRadius: "40rem",
    border: "1rem solid #0F0000",
    cursor: "pointer",
  },

  ".navigation_buttons > button:hover": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16rem",
    fontWeight: "900",
    background: "#0F0000",
    padding: "9rem",
    color: "#FFF2F2",
    borderRadius: "40rem",
    border: "1rem solid #0F0000",
  },

  ".page_selection": {
    display: "flex",
    gap: "8rem",
    justifyContent: "center",
    alignItems: "center",
  },

  ".page_selector": {
    width: "40rem",
    height: "40rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: "16rem",
    background: "#FFF2F2",
    borderRadius: "50rem",
    fontWeight: "900",
    textDecoration: "underline",
    border: "1rem solid #0F0000",
    textDecorationColor: "#0F0000",
  },

  "input[type=number], input::-webkit-outer-spin-button, input::-webkit-inner-spin-button":
    {
      "-webkit-appearance": "none",
      "-moz-appearance": "textfield",
      margin: "0rem",
    },

  ".number_of_pages_label": {
    fontSize: "14rem",
    color: "#BFACAC",
    fontWeight: "900",
  },
});

export default Styles;
