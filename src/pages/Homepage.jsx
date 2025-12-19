import PropertyList from "../components/PropertyList";

import Skeleton from "../components/Skeleton";

export default function Homepage({ properties, isLoading }) {
  if (isLoading) return <Skeleton />;

  return <PropertyList properties={properties} />;
}
