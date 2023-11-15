import { Link } from 'react-router-dom'; 
import './style.css';
import ChuikoImg from './photobakery-95.jpg'
import { Container } from 'react-bootstrap';


export const Chuiko = () => {
  return (
    
    <Container className='py-4'>
        <img className="photo" src={ChuikoImg} alt="Anastasiia Chuiko"></img>
   <header>
        <h1 className='text-muted mb-4'>Anastasiia Chuiko</h1>
      <p>
      Ještě před přestěhováním do České republiky jsem chtěla změnit své povolání, najít si pro sebe stabilní zaměstnání, které by mi přinášelo potěšení a stabilitu bez ohledu na to, kde jsem a co se děje ve světě. A tak jsem po přestěhování objevila svět IT a rozhodla se v něm rozvíjet po malých krůčcích.
      </p>
      <p>
      Z projektu chci získat nové znalosti, zkušenosti s prací na reálném projektu, který bude moderní a užitečný pro uživatele.
      </p>
      <Button variant="primary" className="mt-4" href="https://github.com/Chunastasya">Github</Button>
          <Button variant="primary" className="mt-4 mx-2" href="https://www.linkedin.com/in/anastasiia-chuiko/">LinkedIn</Button>
      
      </header>
      
    </Container>
    
  );
};

{/* <Container className='py-4'>
<Row className='align-items-center'>
  <Col xs={6} md={3}>
    <Image src={photo} alt="Maryna Dukhnich" roundedCircle />
  </Col>
  <Col xs={6} md={8}>
    <h2 className='text-secondary mb-4'>Maryna Dukhnich</h2> */}