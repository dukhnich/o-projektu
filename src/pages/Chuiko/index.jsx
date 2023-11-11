import { Link } from 'react-router-dom'; 
import './style.css';
import ChuikoImg from './photobakery-95.jpg'

export const Chuiko = () => {
  return (
    <div className="container">
      <p>
      Ještě před přestěhováním do České republiky jsem chtěla změnit své povolání, najít si pro sebe stabilní zaměstnání, které by mi přinášelo potěšení a stabilitu bez ohledu na to, kde jsem a co se děje ve světě. A tak jsem po přestěhování objevila svět IT a rozhodla se v něm rozvíjet po malých krůčcích.
      </p>
    <img src={ChuikoImg} alt="Anastasiia Chuiko"></img>
    </div>
  );
};