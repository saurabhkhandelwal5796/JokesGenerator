/**
 * <h1>Enjoy the Jokes </h1>
        <p id = 'jokePara'>joke is loading</p>
        <button id = 'btn'>Next Joke</button>
 */

const savePara = document.querySelector('#jokePara')
const saveButton = document.querySelector('#btn')

const showJoke = () => {
    const setHeader = {headers : {Accept : 'application/json'}  }
    fetch('https://icanhazdadjoke.com/',setHeader)
    .then( (res)=> res.json()  )
    .then(  (data)=> savePara.innerHTML =  data.joke   )
    .catch(  (err) => {console.log(err);}   )
}

saveButton.addEventListener('click',showJoke)
showJoke()