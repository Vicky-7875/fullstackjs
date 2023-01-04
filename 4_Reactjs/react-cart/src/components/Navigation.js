import { Link } from "react-router-dom";

const Navigation = () => {
  const cartStyle = {
    display: "flex",
    background:'#F59E0D',
    padding:'6px 12px',
    borderRadius:'50px'
  };
  return (
    <>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link> */}

      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/">
          <img src="/images/logo.png" style={{ height: 45 }} alt="logo" />
        </Link>
        <ul className="flex items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="ml-6">
            <Link to="/products">Products</Link>
          </li>
          <li className="ml-6">
            <Link to="/cart">
              <div style={cartStyle}>
                <span>6</span>
                <img className="ml-2" src="images/cart.png" alt="cart" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
