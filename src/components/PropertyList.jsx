import PropertyCard from "./PropertyCard";
import { useState } from "react";

export default function PropertyList({ properties = [] }) {
  return (
    <ul>
      {properties.map((p) => (
        <PropertyCard key={p.property_id} property={p} />
      ))}
    </ul>
  );
}
