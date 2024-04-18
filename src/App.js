// import Card from "./Components/Card";
import Detail from "./Components/Detail";
// import Jaggacounter from "./Components/Jaggacounter";
import Navbar from "./Components/Navbar";
import {Routes, Route} from 'react-router-dom'
import Home from "./Components/Home";
import Allproducts from "./Components/Allproducts";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Allproducts/>}/>
        <Route path="/products/:id" element={<Detail/>}/>
        {/* <Route path="/counter" element={<Jaggacounter/>}/> */}
      </Routes>
    </>
  );
}

export default App;
