
let input1 = document.createElement("input");
input1.type = "number";
document.body.appendChild(input1)

let input2 = document.createElement("input");
input2.type = "number";
document.body.appendChild(input2)

let buttonMulti = document.createElement("button");

buttonMulti.innerHTML = "multiplication";
document.body.appendChild(buttonMulti)

let buttonSum = document.createElement("button");
buttonSum.innerHTML = "sum";
document.body.appendChild(buttonSum)

let buttonSub = document.createElement("button");
buttonSub.innerHTML = "subtraction";
document.body.appendChild(buttonSub)

let buttonDiv = document.createElement("button");
buttonDiv.innerHTML = "division";
document.body.appendChild(buttonDiv)

let pRes = document.createElement("p");
document.body.appendChild(pRes)
function res(result) {
    pRes.innerHTML = `<br/> Result = ${result.toFixed(2)}`
}

buttonSum.onclick = () => res((+input1.value) + (+input2.value))
buttonMulti.onclick = () => res((+input1.value) * (+input2.value))
buttonSub.onclick = () => res((+input1.value) - (+input2.value))
buttonDiv.onclick = () => {
    if (input2.value != 0 && input1.value != 0)
        return res(Math.round((+input1.value) / (+input2.value)))
}