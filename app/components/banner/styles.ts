import { styled } from "../../stitches.config";

const Styles = styled("section", {
  width: "100%",
  height: "100vh",
  maxHeight: "540rem",
  backgroundImage: 'url("/assets/images/banner.png")',
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  padding: "70rem 32rem 0rem 32rem",
  display: "flex",
  justifyContent: "center",
});

export default Styles;
