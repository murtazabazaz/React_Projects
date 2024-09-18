import { useState } from 'react'
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';
import TabButton from "../components/tabButton.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selected button -: 'component'....
    setSelectedTopic(selectedButton)
  }

  return (
    <Section title="Examples" id="examples">
      <menu>
        <TabButton
          isSelectedcss={selectedTopic === 'components'}
          onClick={() => handleSelect('components')}
        >
          Components
        </TabButton>
        <TabButton
          isSelectedcss={selectedTopic === 'jsx'}
          onClick={() => handleSelect('jsx')}
        >
          JSX
        </TabButton>
        <TabButton
          isSelectedcss={selectedTopic === 'props'}
          onClick={() => handleSelect('props')}
        >
          Props
        </TabButton>
        <TabButton
          isSelectedcss={selectedTopic === 'state'}
          onClick={() => handleSelect('state')}
        >
          State
        </TabButton>
      </menu>
      {/* Using and operator if true to select the <p> statement*/}

      {!selectedTopic && <p>Please select a topic to view. </p>}

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

    </Section>
  );
}