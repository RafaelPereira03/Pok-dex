const PokeApi = {}

function convertpokemonDetail(pokemondDetails){
    const pokemon = new Pokemon()
    pokemon.number = pokemondDetails.order
    pokemon.name = pokemondDetails.name

    const types = pokemondDetails.types.map((typeSlot)=>typeSlot.type.name)
    const[type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokemondDetails.sprites.other.dream_world.front_default

    return pokemon
}



PokeApi.getPokemonsDetail = (pokemon)=>{
    return fetch(pokemon.url)
        .then((response)=>response.json())   
        .then(convertpokemonDetail)
}




PokeApi.getPokemons = (offset =0,limit =15)=>{


const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    



return fetch(url)
    .then((response)=> response.json())//function para chamar informação de API em Json PARA CONVERSÃO
    .then((jsonBody) => jsonBody.results)//chamada ja convertida FALTA TRAZER PARA HTML
    .then((pokemons) => pokemons.map((PokeApi.getPokemonsDetail)))
    .then((detailRequest)=>Promise.all(detailRequest))
    .then((pokemondDetails) => pokemondDetails)

}
