// import logo from './logo.svg';
import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Banner from './components/banner/Banner';
import Cart from './components/card/Cart';
import Footer from './components/footer/Footer';
import ShoppingList from './components/shoppinglist/ShoppingList';
import { useBasketContext } from './contexts/BasketContext';
import Cart2 from './components/card/Cart2';
import RegistrationForm from './components/Client/RegistationForm';
import { Route, Routes } from 'react-router-dom';
import RegistrationForm2 from './components/Client/RegistrationForm2';
import LoginForm from './components/Client/LoginForm';

function App() {
  const { basket, setBasket } = useBasketContext()
  const [toggleBasket, setToggleBasket] = useState(true);
  const [toggleValidateBasket, setToggleValidateBasket] = useState(false)
  const style = { width: '150px', height: '30px', lineHeight: '30px', background: 'green', color: 'white', borderRadius: '30px 0px 30px 0px', border: 'white' }

  useEffect(() => {
    const data = localStorage.getItem('basket')
    if (data) {
      setBasket(JSON.parse(data))
    }
    console.log('basket__init:', basket)
  }, [])
  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket))
    console.log('basket__updated:', basket)
  }, [basket])

  const updateBasket = (updatedBasket) => {
    setBasket([...updatedBasket])
  }

  const Main = () => {
    return <Fragment>
      <main className='main'>
        {toggleBasket ? <Cart toggleBasket={toggleBasket} changeToggleBasket={setToggleBasket} fValidateBasket={setToggleValidateBasket} validateBasket={toggleValidateBasket} /> : <div><button style={style} onClick={event => setToggleBasket(!toggleBasket)}>voir le panier</button></div>}
        <ShoppingList basket={basket} updateBasket={updateBasket} />
      </main>
      <Footer />
    </Fragment>
  }

  return (
    <div className="App">
      <Banner />
      <Routes>
        {/* <Route path='/signup' element={<RegistrationForm />}></Route> */}
        <Route path='/signup' element={<RegistrationForm2 />}></Route>
        <Route path='/signin' element={<LoginForm />}></Route>
        <Route path='/' element={<Main />}></Route>
      </Routes>

    </div>
  );
}

export default App;
