import Product from "./Product";
import { useEffect, useState } from "react"; //usestate hook -----for storing date

const Products = () => {
  const [products, setProducts] = useState([]); //[] initial send blank
  useEffect(() => {
    // console.log('component mounted----')   //when send emprty []  it run single time
    fetch("/api/products")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      });
  }, []);

  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8">Products</h1>
      <div className="grid grid-cols-5 my-8 gap-24">
        {products.map((prod) => (
          <Product key={prod._id} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default Products;
