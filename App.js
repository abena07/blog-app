import './App.css';
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import NewBlog from './components/NewBlog'
import UpVotes from './components/UpVotes'
import DownVotes from './components/DownVotes'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavBar from './components/NavBar'
import Home from './Home'


function App() {
  return (
    <div >

      <Router>
         <NavBar/>
        <Switch>
          <Route exact path="/" component={SignupForm}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/home" component={Home}/>
        </Switch>
        <NewBlog/>
        <UpVotes/>
        <DownVotes/>

         </Router>
      
      
      

    </div>
  );
}

export default App;
