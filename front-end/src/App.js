import './Assets/vendors/fontawesome-free/css/all.min.css';
import './Assets/scss/sb-admin-2.scss';
import 'bootstrap';
import './App.css'
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/pages/Login';
import Register from './Components/pages/Register';
import Dashboard from './Components/pages/Dashboard';
import Home from './Components/pages/Home';
import ProductPage from './Components/pages/ProductPage';
import AddProduct from './Components/pages/AddProduct';
import PageLayout from './Components/pages/PageLayout';
import OrderPlace from './Components/pages/customer/OrderPlace';
import Cart from './Components/pages/customer/Cart';
import axios from 'axios';
import Checkout from './Components/pages/customer/Checkout';
import RegisterBusiness from './Components/pages/RegisterBusiness';
import Menu from './Components/pages/Menu';
import Order from './Components/pages/Order';
function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get('/api/menu').then((res) => {
      console.log(res.data)
      setMenuItems(res.data)
    })

  }, [])

  const addItemToCart = (item) => {
    const product = cart.filter(f => f.item._id == item._id);
    if (product.length > 0) {
      const getTheproduct = cart.filter(f => f.item._id === item._id);
      const otherItems = cart.filter(f => f.item._id !== item._id);
      getTheproduct[0].quantity++;
      otherItems.push(getTheproduct[0])
      setCart([
        ...otherItems
      ])

    }
    else {
      const orderLine = {
        item: item,
        quantity: 1
      }
      setCart([
        ...cart,
        orderLine
      ])
    }
    calculateTotal(cart)
  }
  const removeItemFromCart = (item) => {
    const items = cart.filter((f) => f.item._id !== item)
    setCart(items);
    calculateTotal(cart);
  }
  const UpdateCart = (item, value) => {
    const getTheproduct = cart.filter(f => f.item._id === item);
    const otherItems = cart.filter(f => f.item._id !== item);
    getTheproduct[0].quantity = value;
    setCart([
      ...otherItems,
      getTheproduct[0]
    ])
    calculateTotal(cart)
  }

  const calculateTotal = (cart) => {
    let total = 0;
    cart.map((item) => {
      total += (item.item.price * item.quantity)
    });
    return total;
  }
  return (
    <div >
      <Router>
        <div >
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/register-business" element={<RegisterBusiness />} />
            <Route exact path="/myorders" element={<OrderPlace cart={cart} />} />
            <Route exact path="/cart" element={<Cart cart={cart}
              handleUpdateCartQuantity={UpdateCart}
              handleRemoveItemFromCart={removeItemFromCart}
              calTotal={calculateTotal}
            />} />
            <Route exact path="/checkout" element={<Checkout cart={cart}
              handleUpdateCartQuantity={UpdateCart}
              handleRemoveItemFromCart={removeItemFromCart}
              calTotal={calculateTotal}
            />} />
            <Route exact path="/dashboard" element={<PageLayout >
              <Dashboard />
            </PageLayout>} />
            <Route exact path="/menu" element={
              <PageLayout >
                <Menu />
              </PageLayout>
            } />
            <Route exact path="/product/:id" element={<ProductPage cart={cart} handleAddItemToCart={addItemToCart} />} />
            <Route exact path="/cart" element={<Cart cart={cart}
              handleRemoveItemFromCart={removeItemFromCart}
            />} />

            <Route exact path="/orders" element={<PageLayout >
              <Order />
            </PageLayout>} />
            <Route exact path="/addproduct" element={<PageLayout >
              <AddProduct />
            </PageLayout>} />
            <Route exact path="" element={<Home
              menuItems={menuItems}
              isLoading={false}
              cart={cart}
              handleAddItemToCart={addItemToCart}
              handleRemoveItemFromCart={removeItemFromCart}
            />} />

            {/* <Route path="" component={NotFound} /> */}

          </Routes>
        </div >
      </Router >
    </div >
  );
}

export default App;
