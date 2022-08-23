
const selectButtons = document.getElementsByClassName("selectBtn");
const playerList = document.getElementById("playerList");
let count = 0;
const calculate = document.getElementById("Calculate-btn"); // 6
const playerExpense = document.getElementById("playerExpense");
const total = document.getElementById("total-Amount");
const calculateTotal = document.getElementById("calculat-total-btn");

for (const button of selectButtons) {
    button.addEventListener("click", function (event) {
        if (count < 5) {
            const getTheButton = event.target.parentNode;
            const playerName =
                getTheButton.querySelector(".playerName").innerText;
            count++;

            const theLi = document.createElement("li");
            const theList = playerList.appendChild(theLi);
            theList.innerHTML = `
                     <span class="listItem">${count}.</span>${playerName}
                     `;
            button.disabled = true;
            button.innerText = "SELECTED";
            if (button.disabled === true) {
                button.style.backgroundColor = "#A2A9AF";
            }
        } else {
            alert("You Selected the maximum Number of players");
        }
    });
}

calculate.addEventListener("click", function () {
    // Get Coast of per Player
    const perPlayerCoast = getInput("player-input-fild");
    const totalExpense = perPlayerCoast * count;

    // added Player Expense
    playerExpense.innerText = totalExpense;

});

calculateTotal.addEventListener("click", function () {
    const playerExpenses = parseFloat(playerExpense.innerText);
    const managerCoast = getInput("manager-input-fild");
    const coachCoast = getInput("coach-input-fild");

    // Added Total coast
    const totalCoast = playerExpenses + managerCoast + coachCoast;
    total.innerText = totalCoast;

    If(managerCoast.value == ‘’ || coachCoast.value ==‘’){
        total.innerText =‘’;
        Return total;
    }

});

function getInput(element) {
    const input = document.getElementById(element);
    const inputString = input.value;
    const inputValueNumber = parseFloat(inputString);
    input.value = "";
    return inputValueNumber;
}