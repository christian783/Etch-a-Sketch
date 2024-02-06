document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
  
    // Function to create the grid
    const createGrid = (size) => {
      container.innerHTML = ''; // Clear existing grid
      for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
          const div = document.createElement("div");
          div.style.cssText = `width: ${480 / size}px; height: ${480 / size}px;`;
          div.setAttribute("class", "theDivs");
          container.appendChild(div);
        }
      }
  
      // Add event listeners to new grid items
      const nodeList = document.querySelectorAll(".theDivs");
      const array = Array.from(nodeList);
  
      array.forEach((item, index) => {
        item.addEventListener("mouseenter", () => {
          item.style.backgroundColor = `black`;
        });
      });
    };
  
    // Initial grid creation
    createGrid(16);
  
    const reloadButton = document.querySelector(".reset");
    reloadButton.addEventListener("click", () => {
      const nodeList = document.querySelectorAll(".theDivs");
      const array = Array.from(nodeList);
      array.forEach((item, index) => {
        item.style.backgroundColor = `white`;
      });
    });
  
    const changeGridButton = document.querySelector(".grid");
    changeGridButton.addEventListener("click", () => {
      const input = parseInt(prompt("Enter the number of grids"));
      if (!isNaN(input) && input > 0) {
        createGrid(input);
      } else {
        alert("Please enter a valid number greater than 0");
      }
    });
  });
  