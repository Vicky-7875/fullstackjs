const Product = () => {
  return (
    <div className="text-center">
      <img src="/images/pepopiz.png" alt="pzi" />
      <h2 className="text-lg font-bold py-2">Havana Special</h2>
      <span className="bg-gray-200 py-1 rounded-full text-sm px-4">Small</span>
      <div className="flex justify-between items-center mt-4">
        <span>₹ 500</span>
        <button className="py-1 px-4 rounded-full font-bold bg-yellow-500">
          ADD
        </button>
      </div>
    </div>
  );
};

export default Product;