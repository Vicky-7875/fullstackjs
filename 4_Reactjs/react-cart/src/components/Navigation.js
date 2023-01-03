import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link> */}

      <nav className="container mx-auto flex items-center">
        <Link to="/">
          <img src="/images/logo.png" style={{ height: 45 }} alt="logo" />
        </Link>
        <ul className="flex items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">
              <div>
                <span>6</span>
                <img src="images/cart.png" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
