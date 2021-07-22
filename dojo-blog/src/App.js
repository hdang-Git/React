import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  // const title = 'Welcome to the new blog';
  // const likes = 50;
  // const person = { name: 'yoshi', age: 30};
  // const link = "http://www.google.com";
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          {/* <Home/> */}
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
          </Switch>
      

          {/* <h1>{title}</h1>
          <p>Liked {likes} times </p>
          <p>{10}</p>
          <p>{"hello ninjas"}</p>
          <p>{[1,2,3,4,5]}</p>
          <p>{Math.random() * 10}</p>
          <a href={link}>Google site</a> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
