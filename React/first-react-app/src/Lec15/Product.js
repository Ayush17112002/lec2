import { useParams } from "react-router-dom";

export default function Product() {
  const path = useParams();
  console.log(path);

  //api call to backend to fetch info for product having id path.productId
  return <>Product {path.productId}</>;
}
