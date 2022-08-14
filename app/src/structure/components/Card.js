/**
 * @file
 * Generate a Card.
 */

import React from 'react';

 /**
  * @param {string} cardClasses
  * @param {string} cardEyebrow
  * @param {string} cardHeading 
  * @param {string} cardHeadingLevel
  * @param {string} cardDescription
  * @param {array} cardList
  * @param {object} cardImage
  */
const Card = (props) => {

  return(
    <div  id={props._id} className={props.cardClasses}>
      <div className='card__content'>
        <div className='card__content__inner'>
          <span className='h3'>{props.cardNumber}</span>
        </div>
      </div>
    </div>      
  );
}
 
 export default Card;