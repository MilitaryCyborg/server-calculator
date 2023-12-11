console.log('client.js is sourced!');

displayCalculationResults();

let resultHistory = {};

function operatorEvent (event) {
    let newOperator = event.target.textContent
    resultHistory.operator = newOperator
    console.log(resultHistory);
    event.preventDefault();
}

function calculateNumbers(event) {
    let firstNumber = document.getElementById("firstNumber").value
    let secondNumber = document.getElementById("secondNumber").value
    resultHistory.firstNumber;
    resultHistory.secondNumber;
    event.preventDefault();
}

axios({
    method: "POST",
    url: "/calculations",
    data: currentResults
  })
  .then((response)=>{
    console.log('successfully added')
    displayResults()
  })
  .catch((error)=>{
    console.log("server error", error);
  })
document.getElementById("calculator").reset()


function displayResults(){


    // Axios GET request
    axios({
        method: "GET",
        url: "/calculations",
      })
      .then((response)=>{
        console.log('response from get', response.data)
       let incArray = response.data
       // display history
       let latestResult =incArray[incArray.length-1]
       let resultHistory = document.getElementById("resultHistory")
       resultHistory.innerHTML =''
       for(let items of incArray){
        resultHistory.innerHTML+=  `<div>${items.numOne} ${items.operator} ${items.numTwo} = ${items.result}</div>`
    }

    // display latest result
    let recentResult = document.getElementById('recentResult')
    recentResult.innerHTML = `<h2>Result: ${latestResult.result}</h2>`
   })
   .catch((error)=>{
     console.log("server error", error);
   })
}

function clearInputs(event){
    event.preventDefault()
    document.getElementById("calculator").reset()
  }