# 🧮 Simple Calculator using JavaScript

This is a basic **Calculator Web App** built using **HTML**, **CSS**, and **JavaScript**. It performs simple arithmetic operations (addition, subtraction, multiplication, division) using **DOM manipulation** and **event listeners** in vanilla JavaScript.

---

## 🌐 Live Demo

👉 [Click here to try the Calculator](https://mahnoorshabbir12.github.io/Calculator/)

---

## 🚀 Features

- Clean user interface
- Handles `+`, `-`, `*`, `/` operations
- Uses `DOM manipulation` for dynamic display
- Supports:
  - Clear (`CE`) button
  - Backspace functionality
  - Shows result on `=` button
- Stores the result after `=` for continued operations

---

## 📁 Folder Structure

```bash
calculator/
├── index.html       # Main HTML structure
├── style.css        # Styling for calculator layout and buttons
└── script.js        # JavaScript logic with event listeners and DOM manipulation
```

## 🧠 How It Works

- Buttons are selected using `querySelectorAll`
- Click events are handled via `addEventListener`
- User input is displayed and stored in a variable called `expression`
- When `=` is clicked:
  - Expression is parsed to detect the operator
  - Operands are extracted using `.slice()`
  - `parseInt()` is used to convert string inputs to numbers
  - The result is shown and stored in `expression` to allow further operations

---

## 💡 Technologies Used

- HTML
- CSS
- JavaScript
  - DOM Manipulation
  - Event Listeners
  - String Parsing

---

## 📸 Screenshot

<img width="1902" height="917" alt="image" src="https://github.com/user-attachments/assets/0859a443-c384-421e-9289-499e6daa6717" />

---

## ✍️ Author

Made by **Mahnoor Shabbir**

---
