import { useLoaderData } from "@remix-run/react";
import PokemonDetailsScreen from "../screens/pokemon_details_screen/pokemon_details_screen";
import PokemonRepositoryFactory from "../domains/pokemon/pokemon_repository_factory";
import PokemonEntity from "../domains/pokemon/infrastructure/entities/pokemon_entity";

async function loader({ params }: { params: { id: string } }) {
  const pokemonRepository = PokemonRepositoryFactory.getInstance();
  const pokemonId = Number(params.id);

  return pokemonRepository.getPokemon(pokemonId);
}

const meta = ({ data }: { data: PokemonEntity }) => [
  { title: `${data.name} - Details` },
];

function Index() {
  const pokemonData = useLoaderData<typeof loader>() as PokemonEntity;

  return <PokemonDetailsScreen pokemonData={pokemonData} />;
}

export default Index;
export { loader, meta };
