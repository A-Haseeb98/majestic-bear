import logo from './logo.svg';
import './App.css';
import AppRouter from './config/router';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>

  );
}

export default App;

