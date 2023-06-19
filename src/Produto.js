import { useParams } from "react-router-dom";
import TabuasData from "./Tabuas.json";

function ProductDetails() {
  const { id } = useParams();
  const product = TabuasData.Jart.find(skateboard => skateboard.id === parseInt(id));

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div>
      <h1>{product.brand}</h1>
      <h5>{product.model}</h5>
      <p2>{product.price}</p2>
      <p>Quantidade: {product.quantity}</p>
      <button>Adicionar ao Carrinho</button>
    </div>
  );
}

export default ProductDetails;