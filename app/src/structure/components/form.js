/**
 * @file
 * Generate a Card.
 */

 import React from 'react';
 // Dispatch is a redux function that calls the reducer, and provides existing state, and executable action
 import { useDispatch } from 'react-redux';
 import { updateCharacters } from '../../state';
 

 const Form = (props) => {
 
   const dispatch = useDispatch();
 
   return(
    <form id='character-form'>
      <div className='grid-container'>
        <div className='grid-x'>
          <div className='flex-child-shrink'>
            <label aria-label='character string' id='character-string-label' htmlFor="character-string">Character String:</label>
          </div>
          <div className='flex-child-grow'>
            <input onChange={(e)=> dispatch(updateCharacters(e.target.value))} id="character-string" aria-labelledby='character-string-label' type="text" ></input>    
          </div>          
        </div>
      </div>
    </form>
   );
 }
  
  export default Form;