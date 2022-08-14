/**
 * Create an array of random integers
 * @param {number} maxNumber
 * the maximum number that can be added to the array
 * @param {number} maxEntries
 * the maximum amount of numbers that can be added to the array
 * @param {boolean} freeSpace
 * if freeSpace is true, we find the 12 space (in the middle) and add "Free"
 */

export function getRandomInt(maxNumber, maxEntries, freeSpace = false) {
  // create the card array
  let bingoCardArray = []

  // For each allowed number slot, generate a random number
  for (let number = 0; number < maxEntries; number++) {
    // grab a random number up to maxNumber
    let num = Math.floor(Math.random() * maxNumber);

    // If the array includes the random number, choose another
    while (bingoCardArray.indexOf(num) !== -1) {
      num = Math.floor(Math.random() * maxNumber);
    }

    // If freeSpace is true, change the 12 array numbers
    if (freeSpace === true && number === 12) {
      num = "FREE";
    }
    bingoCardArray.push(num);
  }

  return bingoCardArray;
}

/**
 * Genenerate a random integer using an existing array as a guide
 * @param {number} maxNumber
 * the maximum number that can be added to the array
 * @param {number} currentArray
 * the array to check against so we don't draw a duplicate number
 */

 export function updateWithRandomInt(maxNumber, currentArray) {

    // grab a random number up to maxNumber
    let num = Math.floor(Math.random() * maxNumber);

    // If the array includes the random number, choose another
    while (currentArray.indexOf(num) !== -1 ) {
      num = Math.floor(Math.random() * maxNumber);
    }

  return num;
}

 /**
  * Create a function to check for bingo. It accepts 2 arrays.
  *
  * @param {bingoCard} array - the array that has all the bingo card numbers
  * @param {drawnNumbers} array - the array that contains all the drawn numbers
  */
export function checkForBingo (bingoCard, drawnNumbers) {
  // create a nested set of arrays that represent winning array index combinations
  // IE [0, 1, 2, 3, 4] represents the first row of squares
  let winningBingoCombos = [
    [0,  1,  2,  3,  4],
    [5,  6,  7,  8,  9 ],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20]  
  ];

  /**
    * A function to compare 2 Arrays
    * - This function is more simple and performs better than the above @function checkArrayEquality consistently by just over ~.0001s
    *
    * @param {a} array - The array to validate
    * @param {b} array - the valid combination to validate against

    */

  function compareArrays(a, b) {
    return a.filter(e => b.includes(e)).sort(function(x, y) {
      return x - y;
    });
  }  
  
  // Create an array that uses drawnNumbers to validate against the bingoCard 
  // and find the array indexes so we can later compare it to winning combinations
  let validateArray = [];
  
  // For each drawn number, included on the bingo card, push its index to validateArray
  drawnNumbers.forEach(number => bingoCard.indexOf(number) !== -1 ? validateArray.push(bingoCard.indexOf(number)) : '');
  
  // set the bingo message and the winning status. By default its false
  let winner = false;
  
  // Run through all instances of winning combos and compare the validateArray to determine Bingo!
  for (let combo of winningBingoCombos) {
    if(JSON.stringify(compareArrays(validateArray, combo)) === JSON.stringify(combo)) {
      winner = true;
      break;
    }
  }
  return winner;
}