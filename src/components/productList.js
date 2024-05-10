import { useSelector } from 'react-redux';

function ProductList() {
  const products = useSelector(state => state.products);

  return (
    <div>
      <h2>Ürün Listesi</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <div>Date: {product.date}</div>
            <div>Name: {product.name}</div>
            <div>Country: {product.country}</div>
            <div>Comment: {product.comment}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
