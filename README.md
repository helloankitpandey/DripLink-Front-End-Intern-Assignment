# 🎬 DripLink Subtitle Template Marketplace UI

A single-page React application for a responsive subtitle template marketplace, built as part of the **DripLink Front End Intern Assignment**.

Users can browse, add to cart, and purchase subtitle styling templates using a virtual 500-credit system. The app uses **Context API** for state management, **CSS** for styling, and **localStorage** for persisting purchased templates.

---

## Installation & Setup
### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/helloankitpandey/DripLink-Front-End-Intern-Assignment
   cd DripLink-Front-End-Intern-Assignment
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
4. **Start the Development Server**
   ```bash
   npm run dev
   ```
5. **Build for Production**
   ```bash
   npm run build
   ```

   ---

## 🧠 Approach

This project uses **React** with **Context API** to manage application state globally and efficiently. Here's how the flow and functionality are structured:

- Built with **React functional components** and **Context API** for centralized state management.
- Users can browse subtitle templates and add them to their cart, provided they haven't already purchased them.
- The **Cart** displays selected templates, calculates the total cost, and handles checkout operations.
- During **Checkout**, the app checks if the user has enough credits, deducts the total cost, and marks templates as purchased.
- The **Subtitle Preview** section lets users preview purchased templates with styles applied dynamically using inline CSS (`styleMap`).
- A custom **toast system** is used to display success, error, and info messages for user actions (like adding/removing items or failed checkout).
- **No backend or localStorage** is used — all data is handled **client-side and temporarily** via React's state.

### 🔄 State Managed via Context API

| State Variable | Purpose |
|----------------|---------|
| `templates`    | List of all available subtitle templates |
| `cart`         | List of templates currently added to the cart |
| `purchased`    | Templates successfully purchased |
| `credits`      | User’s virtual credits (starts at 500) |
| `toast`        | Temporary UI notifications |

   

## 🚀 Features

- **🧩 Template List**  

- **🛒 Cart System**  

- **💰 Credit System**  

- **🔐 Purchase Logic**  

- **✨ Extras**
  - Responsive design for mobile and desktop
  - Smooth UI animations
  - Toast notifications (via `react-toastify`)
  - Free/Premium template filter
  - Dynamic subtitle preview

---

This project was developed as part of the DripLink Frontend Intern Assignment.  
Thanks for checking it out — feedback is appreciated! ✨

