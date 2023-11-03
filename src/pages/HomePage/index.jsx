import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Container from 'react-bootstrap/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Container>
      <main>
        <h1>Sluneční Průvodce</h1>
        <p>O projektu</p>
      </main>
      </Container>
      <Footer />
    </>
  );
};
