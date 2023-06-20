import TabuasData from "./Tabuas.json";
import { useParams } from 'react-router-dom';
import Tabuas from "./Tabuas";
import ProdutosData from "./Produto.json"

function ProductDetails() {
  const { id } = useParams();
  const product = ProdutosData.Produtos.find(skateboard => skateboard.id === parseInt(id));

  console.log(product); // Verifique as informações do produto no console

  return (
    <div>
      {product && (
        <div>
          <h1>{product.brand}</h1>
          <h2>{product.model}</h2>
          <p>{product.price}</p>
          <img src={product.imgsrc} alt={product.model} />
          {/* Resto do código para exibir outras informações do produto */}
        </div>
      )}
    </div>
  );
}

export default ProductDetails;