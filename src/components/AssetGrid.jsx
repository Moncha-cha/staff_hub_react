import AssetCard from "./AssetCard";

function AssetGrid({ assets }) {
  return (
    <section id="asset-grid">
      {assets.map((item) => (
        <AssetCard key={item.id} asset={item} />
      ))}
    </section>
  );
}

export default AssetGrid;
