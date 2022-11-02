import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import Item from './components/ItemListContainer/Item.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Greeting from './components/Titles/Greeting.jsx';
import Greet from './components/Titles/Greet.jsx';








function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />

      <Greeting/>


      <ItemListContainer/>
      
      </header>

    </div>
  );
}

export default App;
