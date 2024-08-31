import { useState } from 'react'
import { CORE_CONCEPTS } from "./data.js";
import Header from './components/Header/Header.jsx'
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/tabButton.jsx";
import { EXAMPLES } from './data.js'
function App() {
  const [selectedTopic, setSelectedTopic] = useState();


  function handleSelect(selectedButton) {
    // selected button -: 'component'....
    setSelectedTopic(selectedButton)
    // console.log(selectedTopic)

  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">

          <h2>Core Concepts.</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* Another way of using spread operator to pull out data from the index you provide*/}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>

        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelectedcss={selectedTopic === 'components'}
              onSelect={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelectedcss={selectedTopic === 'jsx'}
              onSelect={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelectedcss={selectedTopic === 'props'}
              onSelect={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelectedcss={selectedTopic === 'state'}
              onSelect={() => handleSelect('state')}
            >
              State
            </TabButton>
          </menu>
          {/* Using and operator if true to select the <p> statement*/}

          {!selectedTopic && <p>Please select a topic. </p>}

          {/* using this if a button is clicked */}

          {selectedTopic && (
            <div id='tab-content'>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>)}

        </section>
      </main>

      <footer id='footer'>
        <p>Created by Murtaza Bazaz</p>
      </footer>
    </div>
  );
}

export default App;
