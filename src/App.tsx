import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom';
import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-component">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user/1">User 1</Link>
            </li>
            <li>
              <Link to="/user/2">User 2</Link>
            </li>
          </ul>
        </nav>

        <div className="page-container">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/user/:userId">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>

        <div className="vars-container">
          <code>
            <pre>{JSON.stringify(process.env, null, 2)}</pre>
          </code>
        </div>
      </div>
    </Router>
  );
}

const Home: React.FC = () => {
  return <span>Home</span>;
};

const About: React.FC = () => {
  return <span>About</span>;
};

const Users: React.FC = () => {
  const params = useParams<{ userId: string }>();
  return <span>User {params.userId}</span>;
};

export default App;
