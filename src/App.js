// import logo from './logo.svg';
import './App.css';
import Banner from './components/banner/Banner';
import Cart from './components/card/Cart';
import Footer from './components/footer/Footer';
import ShoppingList from './components/shoppinglist/ShoppingList';

function App() {
  return (
    <div className="App">
      <Banner/>
      <main className='main'>
        <Cart />
        <ShoppingList />        
      </main>
      <Footer/>
    </div>
  );
}

export default App;
