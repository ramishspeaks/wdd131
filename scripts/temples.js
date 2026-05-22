const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent =
`Last Modified: ${document.lastModified}`;

/* HAMBURGER MENU */

const menuButton = document.getElementById("menu-button");

const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✖";
    }

    else {
        menuButton.textContent = "☰";
    }

});