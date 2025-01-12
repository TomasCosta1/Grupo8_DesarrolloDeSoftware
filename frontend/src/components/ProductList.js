import React, { useEffect, useState, useContext } from "react";
import ProductCard from "./ProductCard";
import '../styles/ProductList.css';
import CartWidget from "./CartWidget";
import { CartContext } from "../context/CartContext";

const ProductList = () => { // Estado para almacenar los productos
  const [products, setProducts] = useState([]);
  const { total } = useContext(CartContext);

  useEffect(() => { // Función para obtener los productos de la base de datos
    const getProducts = async () => {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data); // Actualiza el estado con los productos obtenidos
    };

    getProducts();
  }, []); 

  // Filtra los productos por las categorías principales para mostrarlos de manera ordenada
  const starters = products.filter((product) => product.category === "Entrada");
  const mainCourses = products.filter((product) => product.category === "PlatoPrincipal");
  const desserts = products.filter((product) => product.category === "Postre");
  const drinks = products.filter((product) => product.category === "Bebida");

  return (
    <div>
      <section>
        <p className="title">Entradas</p>
        <ul className="container">
          {starters.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </section>
      <section>
        <p className="title">Platos Principales</p>
        <ul className="container">
          {mainCourses.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </section>
      <section>
        <p className="title">Postres</p>
        <ul className="container">
          {desserts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </section>
      <section>
        <p className="title">Bebidas</p>
        <ul className="container">
          {drinks.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </section>
      {total ? <CartWidget /> : null}
      
    </div>
  );
};

export default ProductList;
