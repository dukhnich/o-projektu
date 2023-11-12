import './style.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Test from './img/Test.png'

export const HomePage = () => {
  return (
    <Container className='mb-4'>
      <h1 className='text-muted'>Sluneční Průvodce</h1>
      <Row className='align-items-center'>
        <Col xs={12} md={6}>
          <Image src={Test} alt="Test na určení fototypu své kůže" rounded />
        </Col>
        <Col xs={12} md={6}>
          <p>
            Cílem našeho projektu je informovat a edukovat lidi o vlivu slunečního záření na kůži a nabídnout jim konkrétní doporučení pro ochranu kůže. 
          </p>
          <p>
            Chceme vytvořit moderní a uživatelsky přívětivou webovou stránku, kde každý návštěvník má možnost vyplnit test na určení fototypu své kůže a získat doporučení pro konkrétní ochranu. Taky planujeme přidat UV mapu, která poskytuje důležité informace o aktuálním UV indexu a umožňuje lidem plánovat svůj čas venku tak, aby minimalizovali riziko poškození kůže.
          </p>
          <p>
            Doufáme, že tento projekt bude pro nás skvělou příležitostí vyzkoušet a zdokonalit naše dovednosti v oblasti frontend vývoje.
          </p>
          <Button variant="primary" className="mt-4" href="https://github.com/Chunastasya/projekt-slunecniPruvodce">Github</Button>
        </Col>
      </Row>
    </Container>
  );
};
