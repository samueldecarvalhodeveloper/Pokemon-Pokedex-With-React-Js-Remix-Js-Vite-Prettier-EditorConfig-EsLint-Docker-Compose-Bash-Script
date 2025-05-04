import { styled } from "../../stitches.config";

const Styles = styled("article", {
  width: "100%",
  height: "293rem",
  border: "1rem solid #BFACAC",
  background: "#FFF2F2",
  borderRadius: "8rem",
  overflow: "hidden",
  maxWidth: "250rem",

  ".image": {
    width: "100%",
    height: "171rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1rem solid #BFACAC",
    padding: "32rem",
  },

  ".image > img": {
    width: "100%",
    maxHeight: "139rem",
    maxWidth: "139rem",
  },

  ".description": {
    margin: "0rem",
    padding: "8rem 16rem 24rem",
    height: "calc(100% - 173rem)",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexFlow: "column nowrap",
  },

  ".id": {
    color: "#BFACAC",
    fontWeight: "900",
    fontSize: "12rem",
    lineHeight: "150%",
  },

  ".name": {
    color: "#0F0000",
    fontWeight: "600",
    fontSize: "32rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: "125%",
    marginBottom: "8rem",
  },

  ".types": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8rem",
    listStyle: "none",
  },

  ".type": {
    padding: "0rem 8rem",
    lineHeight: "150%",
    borderRadius: "4rem",
    color: "#FFF2F2",
  },
});

export default Styles;
