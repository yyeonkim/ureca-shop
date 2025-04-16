import { useParams } from "react-router";

export default function ProductPage() {
  const params = useParams();

  return <div>ProductPage {params.id}</div>;
}
