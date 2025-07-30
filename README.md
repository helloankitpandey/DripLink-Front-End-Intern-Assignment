# 🎬 DripLink Subtitle Template Marketplace UI

A single-page React application for a responsive subtitle template marketplace, built as part of the **DripLink Front End Intern Assignment**.

Users can browse, add to cart, and purchase subtitle styling templates using a virtual 500-credit system. The app uses **Context API** for state management, **CSS (or TailwindCSS)** for styling, and **localStorage** for persisting purchased templates.

---

## 🚀 Features

- **🧩 Template List**  
  Grid of 5 subtitle templates, each with:
  - Template Name (e.g., Classic, Backdrop)
  - Styled Subtitle Preview
  - Credit Cost (e.g., "Free", "200 coins")
  - "Add to Cart" Button

- **🛒 Cart System**  
  - Sidebar cart view  
  - Displays selected templates, total cost  
  - Remove option for each template  
  - "Checkout" button

- **💰 Credit System**  
  - Simulated user starts with **500 credits**
  - Deducts credits on checkout
  - Toast alerts for:
    - ✅ Successful purchase
    - ❌ Insufficient credits

- **🔐 Purchase Logic**  
  - Marks templates as "Purchased"
  - Prevents duplicate purchases
  - Purchases saved in **localStorage**

- **✨ Extras**
  - Responsive design for mobile and desktop
  - Smooth UI animations
  - Toast notifications (via `react-toastify`)
  - Free/Premium template filter
  - Dynamic subtitle preview

---

## 🛠 Setup Instructions

1. **Clone Repository**
   ```bash
   git clone https://github.com/your-username/driplink-subtitle-marketplace.git
