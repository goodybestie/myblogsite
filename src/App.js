// import Navbar from './Componnent/Navbar';
import "./App.css"
import Blog from "./Componnent/Search"
import Signup from "../src/Signup"
import BlogPage from "./Componnent/blog"
import Login from "../src/Login"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NewBlog from "./Todo/allrecords"
// import Test from "./test/test"

import SinglePage from "./Componnent/singlepage"
function App() {
  return (
    <>
    {/* <Test /> */}
    <Router>
      <Routes>
        
   <Route path='/SinglePage' element={<SinglePage/>}/>
   <Route path='/home' element={<Blog />}/>
   <Route path='/' element={<Signup />}/>
   <Route path='/createnewblog/:id' element={<BlogPage />}/>
   <Route path='/Login' element={<Login />}/>
   <Route path='/allrecords' element={<NewBlog />}/>

   
    </Routes>
    </Router>
    </>
    
  );
}

export default App;
