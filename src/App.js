// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/banner/Banner';
import Cart from './components/card/Cart';
import Footer from './components/footer/Footer';
import ShoppingList from './components/shoppinglist/ShoppingList';

function App() {
  const [basket,setBasket] = useState([])
  const [toggleBasket, setToggleBasket] = useState(true) ;
  const style = {width:'150px',height:'30px',lineHeight:'30px',background:'green',color:'white',borderRadius:'30px 0px 30px 0px',border:'white'}

  useEffect(()=>{
    const data = localStorage.getItem('basket')
    if(data){
      setBasket(JSON.parse(data))
    }
    console.log('basket__init:',basket)
  },[])
  useEffect(()=>{
    localStorage.setItem('basket',JSON.stringify(basket))
    console.log('basket__updated:',basket)
  },[basket])

  const updateBasket = (updatedBasket)=>{
    setBasket([...updatedBasket])
  }

  return (
    <div className="App">
      <Banner/>
      <main className='main'>
        {toggleBasket ? <Cart toggleBasket={toggleBasket} changeToggleBasket={setToggleBasket} basket={basket} /> : <div><button style={style} onClick={event=>setToggleBasket(!toggleBasket)}>voir le panier</button></div>}
        <ShoppingList basket={basket} updateBasket={updateBasket} /> 
      </main>
      <Footer/>
    </div>
  );
}

export default App;
