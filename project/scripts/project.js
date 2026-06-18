// ===============================
// Footer
// ===============================

const currentYear = document.querySelector("#currentyear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

// ===============================
// Destination Objects (Array)
// ===============================

const destinations = [

{
    name: "Hunza Valley",
    category: "north",
    location: "Gilgit Baltistan",
    season: "Spring & Autumn",
    image: "images/hunza.jpg",
    description: "Hunza Valley is famous for breathtaking mountains, peaceful villages, and beautiful lakes."
},

{
    name: "Skardu",
    category: "north",
    location: "Gilgit Baltistan",
    season: "Summer",
    image: "images/skardu.jpg",
    description: "Skardu is the gateway to K2 and many famous trekking routes."
},

{
    name: "Fairy Meadows",
    category: "north",
    location: "Gilgit Baltistan",
    season: "Summer",
    image: "images/fairy-meadows.jpg",
    description: "Fairy Meadows offers spectacular views of Nanga Parbat."
},

{
    name: "Murree",
    category: "north",
    location: "Punjab",
    season: "Winter",
    image: "images/murree.jpg",
    description: "Murree is Pakistan's most popular hill station."
},

{
    name: "Lahore Fort",
    category: "historic",
    location: "Lahore",
    season: "All Year",
    image: "images/lahore-fort.jpg",
    description: "A UNESCO World Heritage Site built during the Mughal Empire."
},

{
    name: "Badshahi Mosque",
    category: "historic",
    location: "Lahore",
    season: "All Year",
    image: "images/badshahi-mosque.jpg",
    description: "One of the largest historic mosques in the world."
}

];

// ===============================
// Display Cards
// ===============================

function displayDestinations(destinationList) {

    const container = document.querySelector("#destinationContainer");

    if (!container) return;

    container.innerHTML = "";

    destinationList.forEach(destination => {

        const card = document.createElement("article");

        card.classList.add("destination-card");

        card.innerHTML = `

            <img
                src="${destination.image}"
                alt="${destination.name}"
                loading="lazy">

            <h3>${destination.name}</h3>

            <p><strong>Location:</strong> ${destination.location}</p>

            <p><strong>Best Season:</strong> ${destination.season}</p>

            <p>${destination.description}</p>

        `;

        container.appendChild(card);

    });

}

// ===============================
// Filter Function
// ===============================

function filterDestinations(category) {

    if (category === "all") {

        displayDestinations(destinations);

    } else {

        const filtered = destinations.filter(destination =>
            destination.category === category
        );

        displayDestinations(filtered);

    }

}

// ===============================
// Destination Page
// ===============================

const container = document.querySelector("#destinationContainer");

if (container) {

    displayDestinations(destinations);

    document.querySelector("#allBtn").addEventListener("click", () => {

        filterDestinations("all");

    });

    document.querySelector("#northBtn").addEventListener("click", () => {

        filterDestinations("north");

    });

    document.querySelector("#historicBtn").addEventListener("click", () => {

        filterDestinations("historic");

    });

}

// ===============================
// Contact Form + localStorage
// ===============================

const form = document.querySelector("#travelForm");

if (form) {

    const savedDestination = localStorage.getItem("favoriteDestination");

    const savedMessage = document.querySelector("#savedMessage");

    if (savedDestination && savedMessage) {

        savedMessage.innerHTML =
        `<p>Your last selected destination was <strong>${savedDestination}</strong>.</p>`;

    }

    form.addEventListener("submit", function () {

        const destination =
            document.querySelector("#destination").value;

        localStorage.setItem(
            "favoriteDestination",
            destination
        );

    });

}