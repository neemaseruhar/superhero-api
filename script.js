// https://superheroapi.com/api.php/122096685512063740/


let url= `https://superheroapi.com/api.php/122096685512063740`
let getSuperhero = (id) => {
    
    fetch(`${url}/${id}`)
    .then(result => result.json())
    .then (json => {
        console.log(json)
        let randomimg = document.getElementById('randomimg')
        getStats(json)
    } )
    .catch (error => console.log(error))
}

let randomNumber = () =>   Math.floor(Math.random()*731) + 1;

let randomHero= document.getElementById('randomHero-btn');

randomHero.onclick = () => getSuperhero(randomNumber());

let input = document.getElementById('searchInput')
let searchButton = document.getElementById('searchbtn')
searchButton.onclick = () => getSuperheroByName(input.value)

let getSuperheroByName= ( name) =>{
    console.log(input.value)
    fetch(`${url}/search/${name}`)
    .then(result => result.json() )
    .then(json => {
        let hero= json.results[0]
        let randomimg = document.getElementById('randomimg')
        randomimg.innerHTML = `<img src= '${hero.image.url}' width= 300 height=/> <p> Name: ${hero.name} <br/> Intelligence: ${hero.powerstats.intelligence}</p>`
    } )
}


let getStats = (character) => {

let img = `<img src= '${character.image.url}' width= 300 height=/>`

let stats = Object.keys(character.powerstats).map(stat => {
    return `<p> ${stat} : ${character.powerstats[stat]} </p>`
}).join('')
// console.log(stats)
randomimg.innerHTML = ` ${img} ${stats}`
}
