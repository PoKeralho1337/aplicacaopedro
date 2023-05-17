import './App.css';
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Carrinho() {
  var nextid = 0;

  var items=[];
  if (localStorage.getItem("carrinho")) {
      items = JSON.parse(localStorage.getItem("carrinho"));
  }
  else items = [];

  var total = 0;

  console.log(total);
  items.forEach(element => {
      console.log(element.Preco);
      total += element.Preco;
  });



  return (
      <body className="">
          <div className=''></div>
          <div>
              <h3 className='titulos'>Carrinho de compras
              </h3>
              <button onClick={() => {
              items = [];
              window.location.reload();  
              }
              }>apagar</button>
              <div>
                  {
                      items.map(item => (


                          <table className='table' key={item.id}>
                              <tr>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <Link to={item.link}><img src={item.img} height="150" /></Link></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='App-header'>{item.nome}</p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='App-header'>{item.preco}</p></th>
                                  <th><center><img src="" height="35" /></center></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                                  <th> <p className='p'></p></th>
                              </tr>

                          </table>
                      
                      ))
                      
                  }
              </div>
          </div>
          
          <p></p>
          
      </body>

  );
}
export default Carrinho;