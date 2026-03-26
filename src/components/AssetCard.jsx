function AssetCard({ asset }) {
  return (
    <div className="asset-card">
      <div className="card-title-row">
        <h3>{asset.name}</h3>
        <span className="category-tag">{asset.category}</span>
      </div>

      <dl className="asset-details">
        <dt>ID:</dt>
        <dd>{asset.id}</dd>

        <dt>Typ:</dt>
        <dd>{asset.type}</dd>
      </dl>

      <div>
        <span className={`status-badge status-${asset.status_id}`}>
          {asset.status_text}
        </span>
      </div>

      <div className="card-footer">
        <button className="admin-btn">Spravovat</button>
      </div>
    </div>
  );
}

export default AssetCard;
