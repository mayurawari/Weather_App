import React, { useState } from 'react'
import "../styles/Nav.css"
export const Nav = () => {
  const [text,setText]=useState(null);

  const handletext=(event)=>{
    setText(event.target.value);
  }
  
  return (
    <nav>
        <h1>Forecast Fusion</h1>

        <div className='searchcomp'>
            <form action="">
                <label htmlFor="cityinp">Get Weather Updates By City....</label>
                <input type="text" id='cityinp' placeholder='Typedown City Name Here ...' onChange={handletext}/>
                <button id='btn-c'>Current</button>
                <button id='btn-f'>Forecast</button>
            </form>
        </div>
    </nav>
  )
}
