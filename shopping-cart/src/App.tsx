import { useState } from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ProductItemTemplate from './components/ProductItem/ProductItemTemplate'

function App() {
  const [quantity, setQuantity] = useState<number>(0);

  const getQuantityFromChild = (data: number):void => {
      setQuantity(data);
  }

  return (
    <>
    <NavBar quantityFromProduct={quantity}/>
    <ProductItemTemplate sendDataToParent = {getQuantityFromChild}/>
    </>
  )
}

export default App
