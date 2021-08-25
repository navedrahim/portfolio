import Home from './screens/Home/Home.jsx';
import Login from './screens/Login/Login.jsx';
import Logout from './screens/Logout/Logout.jsx';
import Portal from './screens/Portal/Portal.jsx';
import ProjectAdd from './screens/ProjectAdd/ProjectAdd.jsx';
import ProjectDetail from './screens/ProjectDetail/ProjectDetail.jsx';
import ProjectEdit from './screens/ProjectEdit/ProjectEdit.jsx';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { verify } from './services/user';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verify();
      setUser(user)
    }
    fetchUser()
  }, [])


  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/login">
        <Login setUser={setUser} user={user}/>
      </Route>
      <Route path="/logout">
        <Logout setUser={setUser}/>
      </Route>
      <Route exact path="/projects/:id">
        <ProjectDetail user={user}/>
      </Route>
      <Route exact path="/projects/:id/edit">
        {user ? <ProjectEdit user={user} /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/portal">
        {user ? <Portal user={user} /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/add">
        {user ? <ProjectAdd user={user} /> : <Redirect to="/login" />}
      </Route>
      </Switch>
    </div>
  );
}

export default App;
