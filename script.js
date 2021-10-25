let enter_btn = document.querySelector(".enter-btn");
let random_btn = document.querySelector(".random-btn");
let card = document.querySelector(".card");
let copy_btn = document.querySelector(".copy-btn");


function apiFetch (fetchNumber) {
    let input = fetchNumber;
    let card_title = document.querySelector(".card-title");
    let card_text = document.querySelector(".card-text");

    if (input !== "") {
        // removes bootstrap display property of none - allowing button to display upon use
        card.classList.remove("display-none");

        fetch(`http://numbersapi.com/${input}`)
            .then(response => response.text())
            .then((data) => {
                console.log(data);
                let new_number_fact = data;
                card_title.innerHTML = `Fact for the number ${input}`;
                card_text.innerHTML =  new_number_fact;
            });
    }    
}


// Retrieves number from input box to generate number fact
function getFacts() {
    let input = document.querySelector(".input").value;
    apiFetch(input);
}


// Generates random number between 1 and 1,000 to generate number fact
function randomFactNumber() {
    let random = Math.floor(Math.random() * 1000) +1;
    apiFetch(random);    
}


// Copies fact text to clipboard
function copyText(){
    const textarea = document.createElement("textarea");
    let card_text = document.querySelector(".card-text").innerHTML;

    textarea.value = card_text;
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Fact has been copied!");
}


enter_btn.addEventListener("click", getFacts);
random_btn.addEventListener("click", randomFactNumber);
copy_btn.addEventListener("click", () => {
    copyText();
});

