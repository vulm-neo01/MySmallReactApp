import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];
  console.log(people[index]);

  const handlePrev = () => {
    if(index == 0){
      setIndex(people.length - 1);
    } else {
      let newIndex = index - 1;
      setIndex(newIndex);
    }
  }

  const handleNext = () => {
    if(index == (people.length - 1)){
      setIndex(0);
    } else {
      let newIndex = index + 1;
      setIndex(newIndex);
    }
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if(randomNumber === index){
      if(index == (people.length - 1)){
        randomNumber--;
      } else {
        randomNumber++;
      }
    }
    console.log(randomNumber);
    setIndex(randomNumber)
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img'></img>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='text'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={handleNext}>
          <FaChevronRight/>
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        Surprise me!!!
      </button>
    </article>
  );
};

export default Review;
