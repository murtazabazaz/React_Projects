import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";
export default function CoreConcepts(){
    return(
        <section id="core-concepts">

        <h2>Core Concepts.</h2>
        <ul>
        {/*  dynamic outputting of list data instead of writing CoreConcept 4 times. */}
        {CORE_CONCEPTS.map((conceptItem)=> (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}

           {/* <CoreConcept
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          /> */}
          {/* Another way of using spread operator to pull out data from the index you provide*/}
          {/* <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />  */}
          
        </ul>

      </section>
    );
}