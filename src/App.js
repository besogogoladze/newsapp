import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header';
import Home from './screens/Home';
import Posts from './screens/Posts';
import LoginPage from './screens/LoginPage';
import AdminPosts from './screens/AdminPosts';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';
import SignUp from './SignUp';

function App() {

  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Header/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Posts/:id" exact component={Posts} />
            <Route path="/loginPage" exact component={LoginPage} />
            <PrivateRoute path="/AdminPosts" exact component={AdminPosts} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
