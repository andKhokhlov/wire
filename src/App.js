import logo from './logo.svg';
import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Chat from './pages/Chat';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/auth' />
          <Route path='/register'  />
          <Route path='/' element={<Chat />} />
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
