function loadHotbar() { // Just a static function to make life easier with the hotbar
    fetch("components/hotbar.html") // fetch html
        .then(response => response.text()) // Get text
        .then(data => {
            document.getElementById("hotbar-container").innerHTML = data; // Set the element to content RAAAAH
        });
}
console.log("I am working")
loadHotbar();