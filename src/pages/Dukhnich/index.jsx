import photo from './dm1.png'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export const Dukhnich = () => {
  return (
    <Container className='py-4'>
      <Row>
        <Col xs={12} sm={6} md={3}>
          <Image src={photo} alt="Maryna Dukhnich" roundedCircle className="mb-4" />
        </Col>
        <Col xs={12} sm={6} md={8}>
          <h1 className='text-muted mt-0'>Maryna Dukhnich</h1>
          <p>
            Ahoj, jsem Maryna Dukhnich a ráda bych vám představila sebe jako účastnice tohoto projektu.
          </p>
          <p>
            Mým hlavním očekáváním z závěrečného projektu je získat cenný zážitek při vytváření funkční verze webové aplikace v krátkém časovém horizontu a také získat zkušenosti s procesem vytváření a integrace mapy. A také se těším na týmovou spolupraci a komunikaci s mentory.
          </p>
          <p>
            Doufám, že vás naše webová stránka osloví a poskytne vám užitečné informace.
          </p>
          <Button variant="primary" className="mt-4" href="https://github.com/dukhnich">Github</Button>
          <Button variant="primary" className="mt-4 mx-2" href="https://www.linkedin.com/in/maryna-dukhnich/">LinkedIn</Button>
        </Col>
      </Row>
    </Container>
  );
};
