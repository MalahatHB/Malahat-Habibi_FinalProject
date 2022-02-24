import './App.css';
import Header from './components/Header';
import { BrowserRouter as ReactRouter } from 'react-router-dom';
import Router from './router';

function App() {
  return (
    <ReactRouter>
      <div className="App">
        <Header title="Movie"/>
        <Router />
      </div>
    </ReactRouter>
  );
}

export default App;
