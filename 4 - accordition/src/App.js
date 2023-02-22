import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestinos] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>Some question for Us!</h3>
        <section className='info'>
          {
            questions.map((question) => {
              return <SingleQuestion key={question.id} {...question} />
            })
          }
        </section>
      </div>
    </main>
  );
}

export default App;
