let inp = document.getElementById("input")
let btn = document.getElementById("btn")
let len = document.getElementById("length-calculation")
let vol = document.getElementById("volume-calculation")
let mas = document.getElementById("mass-calculation")

btn.addEventListener("click", function() {
    lengthCalc(inp.value)
    volumeCalc(inp.value)
    massCalc(inp.value)
})

function lengthCalc(val) {
    len.innerHTML=`${val} meters = ${(val*3.28084).toFixed(3)} feet | ${val} feet = ${(val*0.3048).toFixed(3)} meters` 
}

function volumeCalc(val) {
    vol.innerHTML = `${val} cubic meters = ${(val * 35.3147).toFixed(3)} cubic feet | ${val} cubic feet = ${(val * 0.0283168).toFixed(3)} cubic meters`;
}

function massCalc(val) {
    mas.innerHTML = `${val} kilograms = ${(val * 2.20462).toFixed(3)} pounds | ${val} pounds = ${(val * 0.453592).toFixed(3)} kilograms`;
}

