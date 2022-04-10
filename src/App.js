
import Pages from './pages/Pages';
import Header from "./layout/Header";
import {Link, BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Pages />
      </BrowserRouter>
    </div>
    
  );
}

export default App;
