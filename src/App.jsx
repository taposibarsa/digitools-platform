import { Suspense, useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import Counter from './Components/Counter/Counter'
import GetStarted from './Components/GetStarted/GetStarted'
import Banner from './Components/NavBar/Banner/Banner'
import NavBar from './Components/NavBar/NavBar'
import PremiumTools from './Components/PremiumTools/PremiumTools'
import ReadyToTransform from './Components/ReadyToTransform/ReadyToTransform'
import TransparentPricing from './Components/TransparentPricing/TransparentPricing'
import Footer from './Components/Footer/Footer';

const fetchData = async () => {
  const res = await fetch("/data.json")
  return res.json();
}

function App() {

  const promiseData = fetchData()
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
    toast("Product removed from the cart");
  };

  const handleCheckout = () => {
    setCartItems([]);  // cart empty
    toast.success("Order placed Successfully! ");
};

  return (
    <>
      <NavBar cartCount={cartItems.length} />
      <Banner></Banner>
      <Counter></Counter>
      <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
        <PremiumTools
          promiseData={promiseData}
          cartItems={cartItems}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          onCheckout={handleCheckout}
        >

        </PremiumTools>
      </Suspense>

      <GetStarted></GetStarted>
      <TransparentPricing></TransparentPricing>
      <ReadyToTransform></ReadyToTransform>
      <Footer></Footer>

      <ToastContainer />

    </>
  )
}

export default App
