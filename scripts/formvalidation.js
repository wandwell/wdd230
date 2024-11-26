const pass1 = document.querySelector("#pass1");
const pass2 = document.querySelector("#pass2");
const rating = document.querySelector("#rating");
const ratingvalue = document.querySelector('#ratingvalue');

pass2.addEventListener("focusout", () => {
    if (pass1.value !== pass2.value){
        document.querySelector(".msg").textContent = `Passwords do not match.`;
        pass1.value = "";
        pass2.value = "";
        pass1.focus;
    }else{
        document.querySelector(".msg").textContent = ``;
    }
});

rating.addEventListener("change", () => {
    document.querySelector('.value').innerHTML = rating.value;
});

