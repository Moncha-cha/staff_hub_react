function ControlPanel({
  employee,
  searchText,
  setSearchText,
  activeFilter,
  setActiveFilter,
}) {
  return (
    <header className="main-header">
      <h2>
        Správa majetku
        <small>
          Zaměstnanec: <span id="employee-name-hook">{employee.name}</span> |
          ID:
          <span id="employee-id-hook">{employee.id}</span>
        </small>
      </h2>

      <form className="search-bar">
        <label htmlFor="search-input">Hledat</label>
        <input
          type="text"
          id="search-input"
          placeholder="Hledat majetek"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>
      <div className="filter-group">
        <span>Filtrovat</span>
        <button className="filter-btn" onClick={() => setActiveFilter("all")}>
          Vše (0)
        </button>
        <button className="filter-btn" onClick={() => setActiveFilter("ok")}>
          V pořádku (0)
        </button>
        <button
          className="filter-btn"
          onClick={() => setActiveFilter("pending")}
        >
          Fasování (0)
        </button>
        <button className="filter-btn" onClick={() => setActiveFilter("issue")}>
          Nefunkční (0)
        </button>
      </div>
    </header>
  );
}

export default ControlPanel;
