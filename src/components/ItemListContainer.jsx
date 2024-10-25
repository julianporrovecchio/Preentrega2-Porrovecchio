import React, { useEffect, useState } from "react";
import mockProducts from "./../assets/mockData.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    let productsFiltered;
    if (categoryId) {
      productsFiltered = mockProducts.filter(
        (product) => product.category === categoryId
      );
    } else {
      productsFiltered = mockProducts;
    }
    setProducts(productsFiltered);
  }, [categoryId]);

  console.log(products);

  return <ItemList products={products} />;
};

export default ItemListContainer;
