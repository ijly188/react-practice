import React from 'react';

import Product from './Product';

const products = [
  { id: 1, name: '牛肉鍋' },
  { id: 2, name: '豬肉鍋' },
  { id: 3, name: '羊肉鍋' },
  { id: 4, name: '雞肉鍋' },
  { id: 5, name: '好肉鍋' },
];

const ProductList = () => (
  <ul>
    {products.map(product => (
      <Product
        {...product}
        key={product.id} />
    ))}
  </ul>
);

export default ProductList;