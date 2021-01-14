const display = document.querySelector('#display')
const clear = document.querySelector('#clear')
const allClear = document.querySelector('#all-clear')
const numberArray = document.querySelectorAll('.number')
const operatorArray = document.querySelectorAll('.operator') 
const equalsInput = document.querySelector('#equals')
let userInputArray = []
let userIndex = 0


//Displays numbers to the screen when keys are pressed
for(let i = 0; i<numberArray.length; i++){
    numberArray[i].addEventListener('click', function(){
        addToDisplay(numberArray[i])
        storeNumToArray(numberArray[i])
        console.log(numberArray[i])
    })          
}

for(let i = 0; i<operatorArray.length; i++){
    operatorArray[i].addEventListener('click', function(){
        addToDisplay(operatorArray[i])
        storeOpToArray(operatorArray[i])
         
    })          
}

// Removes last input entry when 'C' is clicked
clear.addEventListener('click', function(){
    userInputArray.splice(userInputArray.length-1)
    display.textContent = userInputArray.join('')
    if (userIndex > 0)
    userIndex--

})

//Clear screen and memory when 'AC' is clicked
allClear.addEventListener('click', function(){
    userInputArray = []
    refreshScreen()
})

//When the 'equals' button is pressed, the operands are resolved via the operate function
equalsInput.addEventListener('click', function(){
    let i = 1
    while (i<userInputArray.length-1){
        let result = operate(userInputArray[i-1], userInputArray[i+1], userInputArray[i])
        userInputArray.splice(i-1, 3, result)
    }
    refreshScreen()
    display.textContent = userInputArray[0]
})
   
function operate(num1, num2, operator){
    switch(operator){
        case 'x':
            return num1*num2

        case '/':
            return num1/num2

        case '+':
            return num1+num2     
            
        case '-':
            return num1-num2
        
        case 'E':  
            return num1**num2 

        default:
            return 'Error'
    }
}

function addToDisplay(appendedValue){
    display.textContent += appendedValue.textContent
}

function storeNumToArray(char){

    console.log(char)
    if(char.textContent == '.'){
        userInputArray[userIndex] = userInputArray[userIndex].toString() + char.textContent.toString()
        console.log('first')
    }
    else if(userInputArray[userIndex]){
        userInputArray[userIndex] = Number(userInputArray[userIndex].toString() + char.textContent.toString())
        console.log('second')
    }
    else{
        userInputArray[userIndex] = Number(char.textContent)
        console.log('third') 
    }

}

function storeOpToArray(char){
    userIndex++
    userInputArray[userIndex] = char.textContent
    userIndex++
}

function refreshScreen(){
    display.textContent = ''
    userIndex = 0
   // clearArray(userInputArray)
}

function clearArray(){
    userInputArray = []
}

