
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Main Components/Header/Header'
import Footer from './components/Footer'
import Menu from './Main Components/Menu/Menu'
import Gallery from './Main Components/Gallery';
import Home from './Main Components/Home';
import Contact from './Main Components/Contact'
import ErrorPage from "./Main Components/ErrorPage";

const App=()=>{
  
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="*"><ErrorPage /></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App