import './App.css';
import {Route , Switch} from 'react-router-dom'
import Home from './Pages/Home'
import Houses from './Pages/Houses'
import SingleHouse from './Pages/SingleHouse'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Error from './Pages/Error'

function App() {
  return (   
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/houses/" exact component={Houses} />
        <Route path="/houses/:id" component={SingleHouse} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />
        <Route component={Error} />
      </Switch>
  );
}

export default App;
