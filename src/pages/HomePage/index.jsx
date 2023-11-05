import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Container from 'react-bootstrap/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const textMD = `
Ahoj, jsem Maryna Dukhnich a ráda bych vám představila sebe jako účastnice tohoto projektu.

Mým hlavním očekáváním z závěrečného projektu je získat cenný zážitek při vytváření funkční verze webové aplikace v krátkém časovém horizontu a také získat zkušenosti s procesem vytváření a integrace mapy. A také se těším na týmovou spolupraci a komunikaci s mentory.

Doufám, že vás naše webová stránka osloví a poskytne vám užitečné informace.
`

export const HomePage = () => {
  return (
    <>
      <Header />
      <Container>
      <main>
        <h1>Sluneční Průvodce</h1>
        <p>
          Cílem našeho projektu je informovat a edukovat lidi o vlivu slunečního záření na kůži a nabídnout jim konkrétní doporučení pro ochranu kůže. 
        </p>
        <p>
          Chceme vytvořit moderní a uživatelsky přívětivou webovou stránku, kde každý návštěvník má možnost vyplnit test na určení fototypu své kůže a získat doporučení pro konkrétní ochranu. Taky planujeme přidat UV mapu, která poskytuje důležité informace o aktuálním UV indexu a umožňuje lidem plánovat svůj čas venku tak, aby minimalizovali riziko poškození kůže.
        </p>
        <p>
          Doufáme, že tento projekt bude pro nás skvělou příležitostí vyzkoušet a zdokonalit naše dovednosti v oblasti frontend vývoje.
        </p>
      </main>
      </Container>
      <Footer />
    </>
  );
};
