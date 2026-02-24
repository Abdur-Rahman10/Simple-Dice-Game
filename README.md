# 🎲 Simple Dice Game

> A fun, interactive web-based dice game built with HTML, CSS, and Vanilla JavaScript. Click the "Roll Dice" button to test your luck and see who wins!

## 🌐 Live Demo
[Play the Game Here](https://abdur-rahman10.github.io/Simple-Dice-Game/)

## 📖 About The Project
This project is a classic "Dicee" game. It features an interactive button that triggers a JavaScript function to generate two random numbers between 1 and 6. The script instantly updates the dice images on the screen and dynamically changes the main heading to announce the winner, all without requiring a page refresh. It is a great showcase of event handling and real-time DOM manipulation.

### ✨ Key Features
* **Interactive Event Handling:** Utilizes an `onclick` event listener to trigger the game logic seamlessly.
* **Dynamic DOM Manipulation:** The JavaScript targets and updates the `src` attributes of the `<img>` tags and the `innerHTML` of the header to declare a winner on the fly.
* **Randomized Logic:** Utilizes `Math.random()` and `Math.floor()` to accurately simulate a 6-sided die roll for two separate players.
* **Custom Styling & Typography:** Features a sleek dark mode theme (`#393E46`) with vibrant teal accents (`#4ECCA3`), custom Google Fonts ('Lobster' and 'Indie Flower'), and smooth CSS transitions for the interactive button.

## 🛠️ Technologies Used
* **HTML5** (Structure)
* **CSS3** (Styling, Custom Fonts, & Hover Transitions)
* **Vanilla JavaScript** (Game Logic, Event Handling, & DOM Updates)

## 📂 Project Structure
* `index.html` - The core structure of the application and the interactive button.
* `styles.css` - The custom stylesheet handling the layout, typography, and button animations.
* `dicechange.js` - The script containing the `rollDice()` function for randomization and DOM updates.
* `images/` - Directory containing the 6 dice faces (`dice1.png` to `dice6.png`).

## 🚀 How to Run Locally
To run this game on your own machine:
1. Clone this repository:
   ```bash
   git clone (https://github.com/Abdur-Rahman10/Simple-Dice-Game.git) ```

2. Navigate to the project directory:
Navigate to the project folder:
```
Bash
cd Simple-Dice-Game
```
Open index.html in your preferred web browser and click "Roll Dice" to play!

👨‍💻 Author
AbduR Rahman

GitHub: @Abdur-Rahman10