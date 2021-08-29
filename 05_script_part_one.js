{/* <div id = 'joke' class = 'joke'>  Joke is loaing... ⏱️  </div>
<button id = 'jokeBtn' class = 'btn'> ⏭️  Next Joke 😆 </button> */}
/**
 * 1) promises
 * 2)fetch api
 * 3) async await
 * 4)error handling
 */

 const jokes = document.querySelector('#joke')
 const jokeBtn = document.querySelector('#jokeBtn')
 
 const generateJokes = () => {
     fetch('https://icanhazdadjoke.com')// yaa toh data milega yaa nahi milega
     .then( (response)=> {                   // agar data mil gaya toh response ko fat arrow function se get kar lo
 
         response.json ()  
         console.log(response.json());                                               // get data ko json format me change kar lo
     }).catch  ( (error) => {  console.log(error)   }      )     // agar reject hua toh error ko catch karke show karo.                          
 }
 
 jokeBtn.addEventListener('click',generateJokes)
 generateJokes() // self call kara taki use jabb first time webpage purr aae toh
 // use bina click kare hee atleast one time joke dikh jae.
 
 