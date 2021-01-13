const display = document.querySelector('#display')
const clearScreen = document.querySelector('#clear')
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
        console.log(userInputArray)
    })          
}

for(let i = 0; i<operatorArray.length; i++){
    operatorArray[i].addEventListener('click', function(){
        addToDisplay(operatorArray[i])
        storeOpToArray(operatorArray[i])
         
    })          
}

//Clear screen when 'C' is clicked
clearScreen.addEventListener('click', refreshScreen)

//When the 'equals' button is pressed, the operands are resolved via the operate function
equalsInput.addEventListener('click', function(){
    let result = operate(userInputArray[0], userInputArray[2], userInputArray[1])
    refreshScreen()
    display.textContent = result
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
    if(userInputArray[userIndex]){
        userInputArray[userIndex] = Number(userInputArray[userIndex].toString() + char.textContent.toString())
    }
    else{
        userInputArray[userIndex] = Number(char.textContent) 
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
    clearArray(userInputArray)
}

function clearArray(){
    userInputArray = []
}

console.log(operate(4, 2, '/'))
