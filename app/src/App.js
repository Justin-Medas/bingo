import React from 'react';
import './scss/theme.scss';
// Provider is a react component to facilitate redux store like react native context.provider
import store from './state';
import BingoGrid from './structure/components/BingoGrid';
import { Provider } from 'react-redux';

function App() {

  return (
    <div className="App global-spacing">
      <Provider store={store}>
        <div className='hero hero--no-img text-margin-reset'>
          <div className='hero__content'>
            <div className='hero__content__inner'>
              <h1>Let's Play Bingo!</h1>
              <div className="global-spacing--xsmall"><p className='intro-text'>An exercise to leverage React, Redux, and data handling to synthesize a game of bingo</p></div>
            </div>
          </div>
        </div>
        <div className='grid-container text-margin-reset'>
          <h2 className='h3'>How to Win</h2>
          <div className='global-spacing--xsmall'><p>You can win by having 5 numbers in succession that appear in a row, column, or diagonally! </p></div>
        </div>
        <section>
          <BingoGrid/>
        </section>        
      </Provider>        
    </div>
  );
}

export default App;