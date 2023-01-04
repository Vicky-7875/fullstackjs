//component
// class base component
// functional Component


//Conitiue  after making rest api    react project with time 1.58.27

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Navigation from "./components/Navigation";

//react fragments <>
// function App() {
//   return (
//     <>
//       <h1>Hello from viveks gyan</h1>
//       <p>This is a paragraph</p>
//     </>
//   ); //return JSX
// }

const App = () => {
  return (
    <>
      <Router>
        <Navigation />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
