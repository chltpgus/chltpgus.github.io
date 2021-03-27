import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Main/>
      <Footer/>
    </div>
  </BrowserRouter>
  );
}

export default App;
