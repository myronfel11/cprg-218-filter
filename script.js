function filterGames(category) {
    let games = document.querySelectorAll(".game");
    let buttons = document.querySelectorAll("nav button");
  
  
    games.forEach((game) => {
      //if category is on "all", then none of them are hidden
      if (category === "all") {
        game.classList.remove("hidden");
        // if classList matches the category, then everything else is hidden
      } else if (game.classList.contains(category)) {
        game.classList.remove("hidden");
      } else {
        game.classList.add("hidden");
      }
    });
  
    // makes sure the selected is only on one button
    buttons.forEach((button) => button.classList.remove("selected"));
  
    // need this for the visual representation
    document
      .querySelector(`nav button[onclick="filterGames('${category}')"]`)
      .classList.add("selected");
  }
  
  // Set "All" as default selected as soon as the page is loaded
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("nav button[onclick=\"filterGames('all')\"]").classList.add("selected");
  });