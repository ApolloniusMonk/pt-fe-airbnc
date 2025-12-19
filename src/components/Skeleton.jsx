export default function Skeleton() {
  const skeletonArr = Array(20).fill(0);

  return (
    <div>
      {skeletonArr.map((_, i) => (
        <div key={i} className="property-card skeleton">
          <div className="skeleton-image" />
          <div className="skeleton-title" />
          <div className="skeleton-desc-text" />
          <div className="skeleton-host-text" />
          <div className="skeleton-price-text" />
        </div>
      ))}
    </div>
  );
}
