function ControlPanel({ employee }) {
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

      <form action="" className="search-bar">
        <label for="search-input">Hledat</label>
        <input type="text" id="search-input" />
      </form>
      <div className="filter-group">
        <span>Filtrovat</span>
        <button className="filter-btn" data-status="all">
          Vše <span>(0)</span>
        </button>
        <button className="filter-btn" data-status="ok">
          V pořádku <span>(0)</span>
        </button>
        <button className="filter-btn" data-status="pending">
          Fasování <span>(0)</span>
        </button>
        <button className="filter-btn" data-status="issue">
          Nefunkční <span>(0)</span>
        </button>
      </div>
    </header>
  );
}

export default ControlPanel;
