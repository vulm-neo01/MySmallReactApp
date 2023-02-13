import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {

  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

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
  return (
    <>
      <Tours tours={tours}/>
    </>
  );
}

export default App;
