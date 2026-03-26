function ControlPanel({
  employee,
  searchText,
  setSearchText,
  /* activeFilter  nevyužívám, ale nechám pro budoucí rozšíření */
  setActiveFilter,
  statusCounts,
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
          Vše ({statusCounts.all})
        </button>
        <button className="filter-btn" onClick={() => setActiveFilter("ok")}>
          V pořádku ({statusCounts.ok})
        </button>
        <button
          className="filter-btn"
          onClick={() => setActiveFilter("pending")}
        >
          Fasování ({statusCounts.pending})
        </button>
        <button className="filter-btn" onClick={() => setActiveFilter("issue")}>
          Nefunkční ({statusCounts.issue})
        </button>
      </div>
    </header>
  );
}

export default ControlPanel;
