import './App.css';
import {Route , Link , Switch} from 'react-router-dom'
import Home from './Pages/Home'
import Houses from './Pages/Houses'
import SingleHouse from './Pages/SingleHouse'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Error from './Pages/Error'

function App() {
  return (
    <div>      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Our-Houses/" exact component={Houses} />
        <Route path="/houses/:id" component={SingleHouse} />
        <Route path="/About/" component={About} />
        <Route path="/Contact/" component={Contact} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
