import Home from './screens/Home/Home';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home/>
      </Route>
    </div>
  );
}

export default App;
