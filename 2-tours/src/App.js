import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {

  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  }

  useEffect(() => {
    fetchTours();
  }, [])

  if(loading){
    return (
      <div>
        <Loading/>
      </div>
    );
  }

  if(tours.length === 0){
    return (
      <section className='title'>
        <h2>No Tour Left!</h2>
        <button className='btn' onClick={() => fetchTours()}>
          Refresh
        </button>
      </section>
    )
  }

  return (
    <>
      <Tours tours={tours} removeTours={removeTours}/>
    </>
  );
}

export default App;
