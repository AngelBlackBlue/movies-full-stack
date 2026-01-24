const moviesContainer = document.getElementById("movies-container");


const renderMovies = (movies) => {
    
    moviesContainer.innerHTML = "";

    const movieElements = movies.map((movie) => {
  
        const card = document.createElement("div");
        card.classList.add("movie-card");

        // Create Image
        const img = document.createElement("img");
        img.src = movie.poster;
        img.alt = movie.title;

        // Create Title
        const title = document.createElement("h3");
        const titleLink = document.createElement("a");
        titleLink.href = "#"; // Placeholder link
        titleLink.textContent = movie.title;
        title.appendChild(titleLink);

        // Create Info (Year + Director + Rate)
        const info = document.createElement("p");
        info.innerHTML = `<strong>${movie.year}</strong> | ${movie.director} <br> Rating: ⭐ ${movie.rate} <br> Duration: ${movie.duration} <br> Genre: ${movie.genre.join(", ")}`;

        // Append elements to card
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(info);

        return card;
    });

    // Append all cards to the container
    movieElements.forEach((card) => moviesContainer.appendChild(card));
}


renderMovies(tempData);
