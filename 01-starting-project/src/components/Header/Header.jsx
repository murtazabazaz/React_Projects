import logoImg from "../../assets/react-core-concepts.png";
import './Header.css'
const phrase = ['Core', 'Crucial', ' Fundamental'];

function genRandom(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const description = phrase[genRandom(phrase.length - 1)]
    return (
      <header>
        <img src={logoImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }