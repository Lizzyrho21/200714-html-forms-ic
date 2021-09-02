console.log("sanity");

//1. grab ref to element
const form = document.getElementById("FORM");
const first = document.getElementById("FNAME")
const last = document.getElementById("LANAME")
const username = document.getElementById("UNAME")
const password = document.getElementById("PASSWORD")
const email = document.getElementById("EMAIL")
const mobileN = document.getElementById("PHONE")
const city = document.getElementById('CITY');
let output = document.getElementById("OUTPUT");
let submit = document.getElementById("SUBMIT");

//2. add event listener
form.addEventListener("submit", (event) =>{
    event.preventDefault(); // prevent the default from happening
    console.log(first.value); // debugger
output.append(first.value + " ");
output.append(last.value + " ");
output.append(username.value) + "  ";
output.append(password.value + " ");
output.append(email.value + " ");
output.append(mobileN.value + " ");
output.append(city.value + " ");
})

submit.value = "Register"; // change the name from submit to  "register"