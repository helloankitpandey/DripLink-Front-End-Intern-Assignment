DripLink Subtitle Template Marketplace UI
A single-page React application for a responsive subtitle template marketplace, built for the DripLink Front End Intern Assignment. Users can browse, add to cart, and purchase subtitle styling templates using a virtual 500-credit system, with state managed via Context API, styling via Tailwind CSS, and purchased templates persisted in localStorage.
Features

Template List: Grid of 5 subtitle templates with name, styled preview, credit cost, and "Add to Cart" button.
Cart System: Sidebar cart with added templates, total cost, remove option, and "Checkout" button.
Credit System: Simulates 500 starting credits, deducts on checkout, with toast notifications for success/insufficient credits.
Purchase Logic: Marks purchased templates, prevents duplicates, saves state in localStorage.
Extras: Responsive design, smooth animations, toast notifications (react-toastify), Free/Premium filter, and dynamic subtitle preview.

Setup

Clone: git clone https://github.com/your-username/driplink-subtitle-marketplace.git
Navigate: cd driplink-subtitle-marketplace
Install: npm install
Run: npm start (opens at http://localhost:3000)
Build (optional): npm run build

Dependencies

React 18
Tailwind CSS
react-toastify
uuid
CDN-hosted React & Babel

Approach

State Management: Context API for cart, credits, purchases, and filters.
Styling: Tailwind CSS with custom effects (neon glow, typewriter animation).
Persistence: localStorage for purchased templates.
UX: Animations, ARIA labels, keyboard navigation, memoized components, lazy-loaded toasts.
Error Handling: Checks for insufficient credits and duplicates with toast feedback.

Assumptions

Fixed 500-credit balance, no login system.
One unit per template, client-side data.
Filter by "available sizes" interpreted as Free/Premium filter.
Static subtitle preview applies last purchased template's style.

Improvements

Creative templates with neon, typewriter, and backdrop effects.
Accessibility with ARIA and keyboard support.
Performance via memoization and lazy loading.
Extras: "Clear Cart" button, preview toggle, optional cart persistence.

Future Enhancements

Backend for authentication and dynamic templates.
Template customization (font size, colors).
Pagination/infinite scroll for larger libraries.
Credit purchase system.

Notes
Meets all requirements with added polish for UX and creativity. Feedback welcome!
