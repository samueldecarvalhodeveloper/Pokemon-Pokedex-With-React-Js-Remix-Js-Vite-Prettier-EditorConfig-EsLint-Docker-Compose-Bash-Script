import { styled } from "../../stitches.config";

const Styles = styled("section", {
  width: "100%",
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "center",

  ".pokemon_listing_section": {
    width: "100%",
    background: "#FFF2F2",
    border: "1rem solid #BFACAC",
    borderRadius: "16rem",
    padding: "32rem",
    position: "relative",
    top: "-230rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1220rem",
    flexFlow: "column ",

    "@bp1": {
      width: "calc(100% - 64rem)",
      margin: "32rem",
      padding: "32rem",
    },
  },

  ".description": {
    textAlign: "center",
    fontSize: "16rem",
    fontWeight: "500",
    color: "#BFACAC",
    marginBottom: "32rem",
  },

  ".pokemons_listing": {
    marginBottom: "32rem",
    display: "grid",
    gap: "32rem",
    gridTemplateColumns: "1fr",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",

    "@bp1": {
      gridTemplateColumns: "1fr 1fr",
    },

    "@bp2": {
      gridTemplateColumns: "1fr 1fr 1fr",
    },

    "@bp3": {
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
    },

    "> article": {
      alignSelf: "center",
    },
  },

  ".pokemon_card_container": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    textDecoration: "none",
  },

  ".pokemon_link": {
    width: "100%",
    maxWidth: "250rem",
    textDecoration: "none",
  },
});

export default Styles;
