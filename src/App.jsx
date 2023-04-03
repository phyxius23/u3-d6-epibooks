import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import BookList from './components/BookList';
import MyFooter from './components/MyFooter';
import books from './data/books/fantasy.json'

function App() {
    return (
      <div className="App">
        <MyNav brand="EpiBooks"/>
        <Welcome title="EpiBooks"/>
        <BookList libreria={books} />
        <MyFooter brand="EpiBooks" />
      </div>
    )
  }
export default App;
