import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {
  const firstImage = property.images?.[0];

  return (
    <li className="property-card">
      <Link to={`/property/${property.property_id}`}>
        {firstImage && (
          <img
            src={firstImage}
            alt={property.property_name}
            className="property-card-image"
          />
        )}
      </Link>
      <h3>{property.property_name}</h3>
      <p>£{property.price_per_night} Per Night </p>
      <p>{property.location}</p>
      <p>Host: {property.host}</p>
      <p className="align-right">♡</p>
    </li>
  );
}
