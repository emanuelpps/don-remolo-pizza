import { Routes, Route } from "react-router-dom";
import "./App.css";
import Greetings from "./components/Layout/Navigation/Greetings/Greetings";
import HeaderNav from "./components/Layout/Navigation/HeaderNav/HeaderNav";
import FoodSelection from "./components/Layout/Navigation/FoodSelection/FoodSelection";
import Cart from "./components/Layout/Navigation/Cart/Cart";
import ItemListContainer from "./components/Layout/Navigation/Containers/ItemListContainer/ItemListContainer";
import Footer from "./components/Layout/Navigation/Footer/Footer";
import CartProvider from "./Context/CartContext";

function App() {
  return (
    <CartProvider>
      <HeaderNav />
      <Routes>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
        <Route path="/food-selection/" element={<FoodSelection />}></Route>
        <Route exact path="/don-remolo-pizza" element={<Greetings />}></Route>
      </Routes>
      <Footer/>
      </CartProvider>
  );
}

export default App;
