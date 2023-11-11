import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div className="main">
      <Header />
      <Outlet />
      <Footer />
      </div>
  );
};
