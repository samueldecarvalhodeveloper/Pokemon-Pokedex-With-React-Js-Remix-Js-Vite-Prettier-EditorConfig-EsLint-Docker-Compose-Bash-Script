import PokemonListingScreen from "../screens/pokemon_listing_screen/pokemon_listing_screen";
import PokemonRepositoryFactory from "../domains/pokemon/pokemon_repository_factory";
import PokemonEntity from "../domains/pokemon/infrastructure/entities/pokemon_entity";
import { useLoaderData } from "@remix-run/react";

async function loader(): Promise<Array<Array<PokemonEntity>>> {
  const pokemonRepository = PokemonRepositoryFactory.getInstance();

  return pokemonRepository.getPokemonMatrix();
}

const meta = () => [{ title: "Pokédex" }];

function Index() {
  const matrixOfPokemons = useLoaderData<typeof loader>() as Array<
    Array<PokemonEntity>
  >;

  return <PokemonListingScreen matrixOfPokemons={matrixOfPokemons} />;
}

export default Index;
export { loader, meta };
