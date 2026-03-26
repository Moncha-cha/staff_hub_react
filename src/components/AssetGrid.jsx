import AssetCard from "./AssetCard";

function AssetGrid({ assets, isAdmin }) {
  return (
    <section id="asset-grid">
      {assets.map((item) => (
        <AssetCard key={item.id} asset={item} isAdmin={isAdmin} />
      ))}
    </section>
  );
}

export default AssetGrid;
