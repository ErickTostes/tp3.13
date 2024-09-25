import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="product-details-container">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} className="product-details-image" />
      <p>{product.description}</p>
      <p><strong>Preço:</strong> ${product.price}</p>
      <p><strong>Categoria:</strong> {product.category}</p>
      <Link to={`/edit-product/${id}`}>Editar Produto</Link>
    </div>
  );
};

export default ProductDetails;
