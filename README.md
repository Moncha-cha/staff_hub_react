Asset Management System – Interní správa majetku

Tato aplikace slouží k přehledné správě a monitoringu firemního majetku přiděleného zaměstnancům. Projekt vznikl jako praktická ukázka přechodu od imperativního programování (Vanilla JS) k deklarativnímu UI v Reactu.

🚀 Klíčové vlastnosti
Dynamický Dashboard: Automatické počítadlo stavů (OK, Pending, Issue) přímo z datového modelu.

Chytré filtrování: Vyhledávání v reálném čase v kombinaci s filtry kategorií a stavu.

Administrátorský režim: Implementace chráněného přístupu přes Login Modal.

Podmíněné vykreslování: Dynamická změna UI (tlačítka pro správu, odhlašovací logika) na základě stavu isAdmin.

🛠 Technický stack
React 18 (Vite)

JavaScript (ES6+) – Mapování polí, destructuring, ternární operátory.

CSS3 – Moderní layouty (Flexbox, Grid), Backdrop-blur filtry pro modaly.

🧠 Architektura a koncepty
Projekt demonstruje hluboké pochopení moderních React principů:

Unidirectional Data Flow: Centrální správa stavu v App.jsx, distribuce dat dolů pomocí props.

Lifting State Up: Komunikace mezi komponentami (např. Modal -> App) přes callback funkce.

Modularita: Rozdělení aplikace na logické celky (Aside, AssetGrid, LoginModal).

🇬🇧 Verze (English)
Asset Management System – Employee Dashboard
A robust internal tool for managing and tracking corporate assets assigned to employees. This project showcases the evolution of an application from a Vanilla JS prototype to a modern React-based architecture.

🚀 Key Features
Dynamic Dashboard: Real-time asset counters (OK, Pending, Issue) derived directly from the state.

Advanced Filtering: Combined text search and category/status filtering with instant UI updates.

Admin Mode: Secure UI layer accessible via a standalone Login Modal component.

Conditional Rendering: Dynamic UI changes (Admin-only actions, login/logout toggle) based on the isAdmin state.

🛠 Tech Stack
React 18

Modern JavaScript – Array methods (.filter(), .map()), destructuring, and template literals.

CSS3 – Responsive layouts, custom properties (variables), and backdrop-blur effects.

🧠 Core React Concepts Used
Unidirectional Data Flow: Managing the "Single Source of Truth" in the parent component and passing data via props.

State Management: Utilizing useState for handling UI visibility, search queries, and authentication.

Component-Based Architecture: Scalable and maintainable structure with isolated components (Aside, AssetGrid, LoginModal, AssetCard).
