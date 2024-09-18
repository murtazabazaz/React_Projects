import Header from './components/Header/Header.jsx'
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
       <CoreConcepts />
       <Examples />
      </main>

      <footer id='footer'>
        <p>Created by Murtaza Bazaz</p>
      </footer>
    </>
  );
}

export default App;
