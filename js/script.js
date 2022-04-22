let elForm = document.querySelector(".form");
let elLabel = document.querySelector("#input-label");
let elInput = document.querySelector("#form-input");
let elSelect = document.querySelector("#select-type");
let elResult1 = document.querySelector("#text1");
let elResult2 = document.querySelector("#text2");


let elOption;
let typesTemp = ["Celcius", "Fahrenheit", "Kelvin"];


for(let typeTemp of typesTemp){
  elOption = document.createElement("option");
  elOption.textContent = typeTemp;
  elOption.value = typeTemp;
  elSelect.append(elOption)
}

elSelect.addEventListener("change", function(evt){
  if(evt.target.value == "Celcius"){
    elLabel.textContent = "Celsius ℃";
  }
  else if(evt.target.value == "Fahrenheit"){
    elLabel.textContent = "Fahrenheit ℉";
  }
  else if(evt.target.value == "Kelvin"){
    elLabel.textContent = "Kelvin ºK";
  }
})

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  if (elInput.value == ""){
    elInput.style.borderColor = "red"
    return;
  }else {
    elInput.style.borderColor = "#ced4da"
  }

  if(isNaN(Number(elInput.value))){
    elInput.value = ""
    elInput.placeholder = "Only enter numbers!!!";
    elInput.style.borderColor = "red"
    return;
  }else {
    elInput.placeholder = "Enter your temperature";
    elInput.style.borderColor = "#ced4da"
  }
  elResult1.style.display = "block";
  elResult2.style.display = "block"
  let celToFahr = (Number(elInput.value) * (9/5) + 32).toFixed(2);
  let celToKel = (Number(elInput.value) + 273.15).toFixed(2);
  let fahrToCel = ((Number(elInput.value) - 32) * (5/9)).toFixed(2);
  let fahrToKel = (Number(fahrToCel) + 273.15).toFixed(2);
  let kelToCel = (Number(elInput.value) - 273.15).toFixed(2);
  let kelToFah = (Number(kelToCel) * (9/5) + 32).toFixed(2);
  if(elLabel.textContent == "Celsius ℃"){
    elResult1.textContent = `${elInput.value} ℃ = ${celToFahr} ℉`;
    elResult2.textContent = `${elInput.value} ℃ = ${celToKel} ºK`;
  }else if(elLabel.textContent == "Fahrenheit ℉"){
    elResult1.textContent = `${elInput.value} ℉ = ${fahrToCel} ℃`;
    elResult2.textContent = `${elInput.value} ℉ = ${fahrToKel} ºK`;
  }else if(elLabel.textContent == "Kelvin ºK") {
    elResult1.textContent = `${elInput.value} ºK = ${kelToCel} ℃`;
    elResult2.textContent = `${elInput.value} ºK = ${kelToFah} ℉`;
  }
  elInput.value = ""
})

