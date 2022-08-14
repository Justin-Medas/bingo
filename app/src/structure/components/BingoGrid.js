/**
 * @file
 * Modular data Formatter.
 */
import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';
import ButtonToggle from '../../helpers/ButtonToggle';
import { getRandomInt, updateWithRandomInt} from '../../helpers/bingoHelpers';
import { updateBingoCardNumbers, updateBingoCardDrawnNumbers, checkForWinner } from '../../state';
import { useDispatch } from 'react-redux';

const BingoGrid = () => {

  const dispatch = useDispatch();

  // state, inputCharacters, and characters comes from store
  const cardNumbers = useSelector(state => state.bingoCardNumbers.bingoCardNumbers);
  const drawnNumbers = useSelector(state => state.bingoCardNumbers.bingoCardDrawnNumbers);
  const winner = useSelector(state => state.bingoCardNumbers.winner);
  dispatch(checkForWinner());

  return(
    <div className='bingo-container'>
      <div className='grid-container'>
        <div className='grid-x grid-padding-x global-spacing--large'>
          <div className='initial-12 medium-9 cell'>
            {cardNumbers.length > 0 ? (
              <div aria-hidden="true" className='grid-x text-margin-reset'>
                <div className='bingo-grid__column'>
                  <p className='h2'>B</p>
                </div>
                <div className='bingo-grid__column'>
                  <p className='h2'>I</p>
                </div>
                <div className='bingo-grid__column'>
                  <p className='h2'>N</p>
                </div>
                <div className='bingo-grid__column'>
                  <p className='h2'>G</p>
                </div>
                <div className='bingo-grid__column'>
                  <p className='h2'>O</p>
                </div>        
              </div>
              ) : ('')}
            <div id="bingo-card" className='grid-x bingo-grid global-spacing--small'>
              {cardNumbers.length > 0 ? (
                cardNumbers.map((num, key) => (
                  <div key={key} className='bingo-grid__column'>
                    <Card 
                      cardClasses={`${drawnNumbers.indexOf(num) !== -1 ? `card--bingo--selected` : ``} ${num === "FREE" ? `card--bingo--free-space` : ``} card--bingo card card--large card--bordered card--rounded text-margin-reset`}
                      cardEyebrow='Character'
                      cardHeading={key}
                      cardNumberEyebrow={`Number of times this character appears`}
                      cardNumber={num}
                      _id={`card${num}`}
                    />
                  </div>
                ))
              
              ) : (
                <div className='initial-12 cell global-spacing--xlarge'>
                </div>
              )}
            </div>
          </div>        
          <div className='initial-12 medium-3 cell global-spacing--2xlarge'>
            <ButtonToggle
              onToggle={()=> dispatch(updateBingoCardNumbers(getRandomInt(31,25, true)))}
              buttonClass='btn btn--new-bingo-card'
              buttonLabel='Click to generate a new bingo card'
              buttonId='new-bingo-card'
              buttonControls='bingo-card'
              buttonToggleType='toggle'
              buttonText='New Bingo Card'
            />
            <ButtonToggle
              onToggle={()=> dispatch(updateBingoCardDrawnNumbers(updateWithRandomInt(31,drawnNumbers)))}
              buttonClass='btn btn--alternate btn--drawn-number'
              buttonLabel='Click to draw a number'
              buttonId='new-bingo-number'
              buttonControls='bingo-card'
              buttonToggleType='toggle'
              buttonText='Draw a Number'
              disabled={cardNumbers.length > 0 && drawnNumbers.length !== cardNumbers.length ? false : true}
            />
            {drawnNumbers.length > 1 ? (
              <div className='global-spacing--small winning-numbers-list'>
                <h3 className='h4'>Drawn Numbers</h3>
                <ul className='drawn-numbers list--inline'>
                  {drawnNumbers.map((num, key) => (
                    num !== "FREE" ? <li className={`${cardNumbers.indexOf(num) !== -1 ? `on-bing-card` : ``} h3`} key={key}>{num}</li> : ''
                  ))}
                </ul>                
              </div>  
            ) : ( <h3 className='h4'><em>No Drawn Numbers Yet</em></h3>)}              
          </div>        
        </div>
      </div>
      <div aria-hidden={drawnNumbers.length > 1 ? false : true } className={`${drawnNumbers.length > 1 ? 'winner-banner--active' : '' } winner-banner text-margin-reset`}>
        {drawnNumbers.length > 1 ? (
          <p className='h3' aria-live='polite'>{winner === true ? 'BINGO! You won! now claim your prize!' : 'No bingo yet, but a win is in sight. Keep at it!'}</p>
        ) : ('')}            
      </div>
    </div>
  );
 }
 
 export default BingoGrid;