// Selector for the movies container
const moviesContainer = document.getElementById("movies-container");

// Function to render movies
function renderMovies(movies) {
    // Clear previous content if needed
    moviesContainer.innerHTML = "";

    // Map over the movies array and create HTML elements
    const movieElements = movies.map((movie) => {
        // Create container div
        const card = document.createElement("div");
        card.classList.add("movie-card");

        // Create Image
        const img = document.createElement("img");
        img.src = movie.poster;
        img.alt = movie.title;

        // Create Title
        const title = document.createElement("h3");
        // Link title to a potential detail page (optional, or just text)
        const titleLink = document.createElement("a");
        titleLink.href = "#"; // Placeholder link
        titleLink.textContent = movie.title;
        title.appendChild(titleLink);

        // Create Info (Year + Director + Rate)
        const info = document.createElement("p");
        info.innerHTML = `<strong>${movie.year}</strong> | ${movie.director} <br> Rating: ⭐ ${movie.rate}`;

        // Append elements to card
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(info);

        return card;
    });

    // Append all cards to the container
    movieElements.forEach((card) => moviesContainer.appendChild(card));
}

// Call the function with tempData
renderMovies(tempData);
