import { Link } from "@remix-run/react";
import Styles from "./styles";
import PokemonCard from "../../components/pokemon_card/pokemon_card";
import PokemonEntity from "../../domains/pokemon/infrastructure/entities/pokemon_entity";

function PokemonDetailsScreen(props: { pokemonData: PokemonEntity }) {
  const { pokemonData } = props;

  return (
    <Styles>
      <section className="content">
        <PokemonCard pokemonData={pokemonData} />
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
          orci ligula. Proin condimentum metus in dui lobortis, a cursus purus
          dapibus.
        </p>
        <Link
          to="/"
          className="return_link">
          Back To Home {"->"}
        </Link>
      </section>
    </Styles>
  );
}

export default PokemonDetailsScreen;
