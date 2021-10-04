import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Teachers from './components/Teacher/Teacher';
import Courses from './components/Courses/Courses';
import Course from './components/Course/Course';




function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
       <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/teachers">
            <Teachers></Teachers>
          </Route>
        
          <Route path="/about">
            <About></About>
          </Route>
          <Route path='/course'>
          <Course></Course>
          </Route>
          
          <Route exact path="*">
            <Notfound></Notfound>
          </Route>
       </Switch>
       <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
