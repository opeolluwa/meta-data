//get the form element and  prevent default submit action
const searchFormElement = (<HTMLFormElement>document.getElementById("search-form"))
searchFormElement.addEventListener("submit", (event) => {
    event.preventDefault()
});


//get the form control elements from the DOM 
const inputFeed = (<HTMLInputElement>document.getElementById("input-feed"));
const searchButton = (<HTMLButtonElement>document.querySelector("#search-form button[type='submit']"));
searchButton?.addEventListener("click", async () => {
    const searchTerm = inputFeed?.value;
    if (searchTerm) {
        window.location.href = `/v1/resource/search?q=${encodeURIComponent(searchTerm)}`;
    }
    else {
        alert("Please enter a search term");
    }
})


//get the elements from the dom
const navigationButton = (<HTMLInputElement>document.getElementById("navigation-button"));
const navigation = (<HTMLInputElement>document.getElementById("navigation"));
navigationButton.addEventListener("click", () => {
    navigation.classList.toggle("navigation-active");
})

