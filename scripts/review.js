// Review Counter

let reviewCount =
    Number(localStorage.getItem("reviewCount")) || 0;

reviewCount++;

localStorage.setItem("reviewCount", reviewCount);

document.querySelector("#reviewCount").textContent =
    reviewCount;

// Footer Current Year

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

// Last Modified Date

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;