function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbarb") {
        x.className += " responsive";
    } else {
        x.className = "navbarb";
    }
}