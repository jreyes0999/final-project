function homePage() {
    var div = document.createElement("div"); // create new element
    div.innerHTML = "At J & A's Wings you can never go wrong! Founded in 2021 by Jonathan and Alston, we strive to deliver the best wings in the city of Memphis! So come on down and try out one of our many famous flavors! Ain't nothin' like some J & A's!"; // adding text on the element
    document.body.appendChild(div); // appending the element to the body
}
homePage(); // calling the function

// when the user clicks the button it hides or shows the dropdown
function myFunction () {
    document.getElementById("myDropdown").classList.toggle("show");
}
// close dropdown menu if clicked out of
windows.onclick = function (e) {
    if (!e.target.matches('.dropdownbtn')) {
        var myDropdown = document.getElementsByClassName("myDropdown");
        if (myDropdown.classList.contains("show")) {
            myDropdown.classList.remove("show");
        }
    }
}