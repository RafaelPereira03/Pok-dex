const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 3
let offset = 0



function loadPokemonsItens(limit,offset) {
    
    PokeApi.getPokemons(offset,limit).then((pokemons = [])=>{
        const newHtml = pokemons.map((pokemon)=>`
            
                <li class="pokemon ${pokemon.type}">
                    <span class="number">${pokemon.number}</span>
    
                    <span class="name">${pokemon.name}</span>
    
                    <div class="detail">
                        <ol class="types">
                          ${pokemon.types.map((type)=>`<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
    
                        <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                    </div>
                </li>
        
            `
    )   .join('')


        pokemonList.innerHTML += newHtml
    })

}


loadPokemonsItens(limit,offset)


loadMoreButton.addEventListener('click', ()=>{
    offset += limit
    loadPokemonsItens(limit,offset)
})




// interface de uma requisição da API é isso!!!//


//retorna a promise => fetch | .then =>traz
//se der algo de errado temos o catch