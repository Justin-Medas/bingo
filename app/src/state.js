/**
 * @state
 * Redux State Management.
 */

import {configureStore} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import { checkForBingo } from './helpers/bingoHelpers';

const trackBingoCardNumbers = createSlice({
  // name is reserved property to identify a slice instance
  name: 'bingoCardNumbers',
  // initialState is a reserved property to track obviously, initialState
  initialState: {
    // non reserved properties passed into state as defined by developer
    bingoCardNumbers: [],
    bingoCardDrawnNumbers: ['FREE'],
    winner: false,
  },
  // reducers is a reserved property in react, mini functions used to modify state
  // Each function does a small thing on a per-component basis
  reducers: {
    // entire redux state object as is when function is called, and then actions to perform thereafter
    updateBingoCardNumbers: (state, action) => {
      state.bingoCardNumbers = action.payload;

      // Reset Drawn Numbers
      state.bingoCardDrawnNumbers = ['FREE']
    },
    updateBingoCardDrawnNumbers: (state, action) => {
      state.bingoCardDrawnNumbers.push(action.payload);
    },
    checkForWinner: (state, action) => {
      state.winner = checkForBingo(state.bingoCardNumbers, state.bingoCardDrawnNumbers);
    }
  }
});

// We're exporting the entire store, which is a collection of slices.
// Using reducer key which is a reserved value in configureStore
// and passing it selection, which is the name of our slice, 
// and then using the createSlice name as the value (a little redundant)
const store = configureStore({
  // A reducer is a pure function that takes an action and the previous state of the 
  // application and returns the new state. The action describes what happened and 
  // it is the reducer's job to return the new state based on that action.
  reducer: {
    bingoCardNumbers: trackBingoCardNumbers.reducer
  }
});

// expose reducer function to be used in React Components, 
// where actions is the entire gambit of functions inside reducers
export const {updateBingoCardNumbers, updateBingoCardDrawnNumbers, checkForWinner} = trackBingoCardNumbers.actions
export default store;