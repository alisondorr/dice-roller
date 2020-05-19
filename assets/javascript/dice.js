//JS code assignment of variables
let x = 0
let index = 0
let diceArray = []
let total = 0
let enterInput = document.querySelector("#enterInput")
let numSides = document.querySelector("#numSides")
let clickToRoll = document.querySelector("#clickToRoll")
let showButton = document.querySelector("#showButton")
let results = document.querySelector("#total")
let allRollsElement = document.querySelector("#allRolls")
let li = document.querySelector("#allRolls")
let resetButton = document.querySelector("#reset-button")
//JS code for input event for the number of rolls
//JS code to recognize clicking the roll button 
clickToRoll.addEventListener("click", function () {
    while (index < enterInput.value) {
        x = Math.round((Math.random() + 0.5) * numSides.value)
        if (x > numSides.value) {
        } else {
            diceArray[index] = x
            total = total + x
            index += 1
            console.log(diceArray)
            console.log(total)
            results.innerHTML = total
        }
    }
})

showButton.addEventListener("click", function () {
    for (let i = 0; i < diceArray.length; i++) {
        const newDiceString = '<li class="allRolls">' + diceArray[i] + "</li>";
        allRollsElement.innerHTML += newDiceString;
        console.log(newDiceString)
    }
})

resetButton.addEventListener("click", function () {
    li.innerHTML = 0
    results.innerHTML = 0
    enterInput.innerHTML = 0
    numSides.innerHTML = 0
    allRollsElement.innerHTML = 0
})
        //avg = (total / enterInput.value)
        //name = name.innerHTML
        //console.log(diceArray)
        //console.log("Hi", name, "your total was:  ", total);
        //console.log("Your average per die roll was
