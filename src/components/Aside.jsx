function Aside({ onOpenLogin, onLogout, isAdmin }) {
  return (
    <aside>
      <div className="sidebar-top">
        <img src="/images.png" alt="Logo Accenture" className="sidebar-logo" />
        <h1>Karta zaměstnance</h1>

        <ul>
          <li>
            <a href="#">Docházka</a>
          </li>
          <li>
            <a href="#">Školení</a>
          </li>
          <li>
            <a href="#">Správa majetku</a>
          </li>
          <li>
            <a href="#">Certifikace</a>
          </li>
        </ul>
      </div>

      <div className="admin-section">
        <hr />
        <button
          className={`sidebar-btn ${isAdmin ? "logout-mode" : ""}`}
          onClick={isAdmin ? onLogout : onOpenLogin}
        >
          {isAdmin ? "Odhlásit se" : "Režim správce"}
        </button>
      </div>
    </aside>
  );
}

export default Aside;
