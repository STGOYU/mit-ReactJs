import React, { useState } from 'react'
import data from "./assets/data/data.json";
import { FaChevronLeft, FaChevronRight, FaQuoteRight, FaGithubSquare } from "react-icons/fa";

const Review = () => {

  const [index,setIndex] = useState(0);
  const {name,job,image,text}= data[index]

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index+1;
      return newIndex;
    })
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index-1;
      return newIndex;
    })
  }

  return (
    <article className='review'>
      <div className="items">
      <div className="img-container">
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <button className="prev-btn" onClick={prevPerson}>
        <FaChevronLeft/>
      </button>
      <button className="next-btn" onClick={nextPerson}>
        <FaChevronRight/>
      </button>
      <button className="random-btn">
        <FaChevronLeft/>
      </button>
      <button className="random-btn">
        Read more
      </button>
      </div>
    </article>
  )
}

export default Review;