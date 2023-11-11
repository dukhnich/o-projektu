import { Link } from 'react-router-dom'; 
import './style.css';
import photo from './dm1.png'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export const Dukhnich = () => {
  return (
    <Container className='py-4'>
      <Row className='align-items-center'>
        <Col xs={6} md={3}>
          <Image src={photo} alt="Maryna Dukhnich" roundedCircle />
        </Col>
        <Col xs={6} md={8}>
          <h2 className='text-secondary mb-4'>Maryna Dukhnich</h2>
          <p>
            Ahoj, jsem Maryna Dukhnich a ráda bych vám představila sebe jako účastnice tohoto projektu.
          </p>
          <p>
            Mým hlavním očekáváním z závěrečného projektu je získat cenný zážitek při vytváření funkční verze webové aplikace v krátkém časovém horizontu a také získat zkušenosti s procesem vytváření a integrace mapy. A také se těším na týmovou spolupraci a komunikaci s mentory.
          </p>
          <p>
            Doufám, že vás naše webová stránka osloví a poskytne vám užitečné informace.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
