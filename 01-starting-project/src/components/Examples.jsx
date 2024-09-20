import { useState } from 'react'
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';
import TabButton from "../components/tabButton.jsx";
import Tabs from './Tabs.jsx';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selected button -: 'component'....
    setSelectedTopic(selectedButton)
  }

  // outputting content based on the button click...

  let tabContent = <p>Please select a topic.</p>

  if(selectedTopic){
    tabContent = (
      <div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
    <Tabs
    ButtonContainer="menu"
    buttons={
      <>
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
      </>
    }
    >
    </Tabs>
       {tabContent}
    </Section>
  );
}