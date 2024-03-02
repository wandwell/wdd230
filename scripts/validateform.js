const password1 = document.querySelector("#pass1");
const password2 = document.querySelector("#pass2");
const message = document.querySelector("#message");

const rangevalue = document.getElementById("value");
const rating = document.getElementById("rating");

password2.addEventListener("focusout", checkSame);

rating.addEventListener('change', displayRatingValue);
rating.addEventListener('input', displayRatingValue);

function checkSame(){
    if (password2.value !== password1.value){
        message.textContent = "! Passwords do not match";
        password2.value = "";
		password2.focus();
    }
    else{
        message.computedStyleMap.display = "none";
    }
}

function displayRatingValue() {
    rangevalue.innerHTML = rating.value;
}