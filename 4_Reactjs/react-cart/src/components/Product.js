const Product = (props) => {
  console.log(props);
  const { product } = props;
  return (
    <div className="text-center">
      <img src={product.image} alt={product.name} />
      <h2 className="text-lg font-bold py-2">{product.name}</h2>
      <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
        {product.size}
      </span>
      <div className="flex justify-between items-center mt-4">
        <span>₹ {product.price}</span>
        <button className="py-1 px-4 rounded-full font-bold bg-yellow-500">
          ADD
        </button>
      </div>
    </div>
  );
};

export default Product;
