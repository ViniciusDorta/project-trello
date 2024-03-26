import { BrowserRouter } from 'react-router-dom';
import './App.css'
import RoutesApp from './routes';

export default function App() 
{
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
}