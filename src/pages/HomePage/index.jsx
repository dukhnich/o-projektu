import './style.css';
import Container from 'react-bootstrap/Container';

export const HomePage = () => {
  return (
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
        <img src="./Test.png"></img>
      </main>
    </Container>
  );
};
