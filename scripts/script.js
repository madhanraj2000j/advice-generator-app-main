// elements

const numberEl = document.querySelector(".advice-number");
const adviceEl = document.querySelector(".advice");
const diceEl = document.getElementById("dice");

// functions
function showAdvice(){
  // API fetching
  let url = "https://api.adviceslip.com/advice";
  fetch(url).then((response)=>{
  response.json().then((data) =>{

    // getting data
    let advice = data.slip.advice;
    let number = data.slip.id;

  //  displaying
   numberEl.innerText = `ADVICE #${number}`;
   adviceEl.innerText = advice;
  });
  });
}

// event listener 
diceEl.addEventListener('click',showAdvice);