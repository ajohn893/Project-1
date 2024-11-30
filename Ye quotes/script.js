const jokeEL = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')


jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke () {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://api.kanye.rest', config)
    
    const data = await res.json()
    
    jokeEL.innerHTML = data.quote

}
//depends on personal preference both method works the same//

// function generateJoke () {
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }

//     fetch('https://api.kanye.rest', config)
//     .then((res) => res.json()
//     .then((data) => {
//         jokeEL.innerHTML = data.quote
//     }) )
// }
