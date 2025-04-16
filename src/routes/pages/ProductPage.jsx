import { useParams } from "react-router";

export default function ProductPage() {
  const params = useParams();
  console.log(params.id);
  return <div>ProductPage</div>;
}
