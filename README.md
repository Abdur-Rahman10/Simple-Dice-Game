# 🎲 Dice Game

> A fully interactive, state-managed, two-player turn-based dice game. Test your luck, manage your risk, and race to 50 points!

## 🌐 Live Demo
[Play the Game Here](https://abdur-rahman10.github.io/Simple-Dice-Game/)

## 📖 About The Project
This project is a web-based adaptation of the classic "Pig" dice game. It represents a significant step up from basic DOM manipulation by introducing complex Application State Management. Players take turns rolling a die to accumulate points, but must choose when to "Hold" and bank their score. If a player rolls a `1`, they lose all points for that turn and play passes to the opponent. The first player to reach 50 points wins.

### ✨ Key Features
* **🧠 Application State Management:** Utilizes a central JavaScript state machine (tracking `scores`, `currentScore`, `activePlayer`, and a `playing` boolean flag) to handle turn logic and game-over locking.
* **🔄 Advanced DOM Manipulation:** Leverages modern ES6 template literals and `classList.toggle()` to dynamically switch active player UI, render the correct dice faces, and trigger winning states without page refreshes.
* **📐 Modern Responsive Layout:** Uses CSS Flexbox to create a sleek, split-screen arena that automatically stacks into a mobile-friendly column on smaller devices.
* **✨ Interactive UI/UX:** Features a custom-built pop-up modal for game rules with a background-dimming overlay, plus visual highlights to clearly indicate the active player.
* **🛡️ Strict Mode:** Written using JavaScript's `'use strict';` directive to ensure secure, bug-free, and future-proof code execution.

## 🛠️ Technologies Used
* **HTML5** (Semantic Structure & Modals)
* **CSS3** (Flexbox, Absolute Positioning, Z-index Overlays, & Hover Transitions)
* **Vanilla JavaScript** (ES6+, State Management, Event Listeners, & DOM Updates)

## 📂 Project Structure
* `index.html` - The core structure, including the split-screen player panels and the hidden rules modal.
* `styles.css` - The custom stylesheet handling the responsive Flexbox layout and dark/teal theme.
* `dicechange.js` - The "brain" of the game containing the state variables, randomization logic, and event handlers.
* `images/` - Directory containing the 6 dice faces and project favicons.

## 🚀 How to Run Locally

To run this game on your own machine:

1. **Clone this repository:**
   ```bash
   git clone [https://github.com/Abdur-Rahman10/Simple-Dice-Game.git](https://github.com/Abdur-Rahman10/Simple-Dice-Game.git)
Navigate to the project directory:

Bash```
cd Simple-Dice-Game```

Open the game:
Simply open the index.html file in your preferred web browser. No local server is required!

👨‍💻 Author: AbduR Rahman
🌐 GitHub: @Abdur-Rahman10