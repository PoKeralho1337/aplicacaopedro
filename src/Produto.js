import { Link } from 'react-router-dom';
import './Produt.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Produto() {
    return (
        <div>
        <body>
            <main>
                <h2>Produtos</h2>
                <ul class="produtos">
                    <li class="produto">
                        <img src="imagens/jart1.png" alt="Produto 1"/>
                            <h3>Nome do Produto 1</h3>
                            <p class="preco">R$ 99,99</p>
                            <div class="opcoes">
                                <label for="quantidade1">Quantidade:</label>
                                <input type="number" id="quantidade1" name="quantidade1" value="1" min="1"/>
                                    <label for="tamanho1">Tamanho:</label>
                                    <select id="tamanho1" name="tamanho1">
                                        <option value="m">M</option>
                                        <option value="l">L</option>
                                        <option value="xl">XL</option>
                                    </select>
                                    <button class="adicionar-ao-carrinho" data-produto="1">Adicionar ao Carrinho</button>
                            </div>
                    </li>
                </ul>
            </main>
        </body>
        </div>
    );
}

export default Produto;