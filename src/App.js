
import Pages from './pages/Pages';
import {Link, BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </div>
    
  );
}

export default App;
