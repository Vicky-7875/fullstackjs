//component
// class base component
// functional Component

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
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
        </Switch>
      </Router>
    </>
  );
};

export default App;
