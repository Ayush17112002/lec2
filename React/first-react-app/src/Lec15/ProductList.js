import { Link } from "react-router-dom";

const products = [
  { id: "p1", name: "product 1" },
  { id: "p2", name: "product 2" },
  { id: "p3", name: "product 3" },
];

export default function ProductList() {
  //FETCH ALL PRODUCT LIST FROM BACKEND
  return (
    <ul>
      {products.map((product) => {
        return (
          <li>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
