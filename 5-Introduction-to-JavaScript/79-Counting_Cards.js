/* I wrote a function that tests an argument and increments or decrements a global variable accordingly. It then returns a message that depends on the cumulative value of the global variable. */
var count = 0;
var bet = " Bet";
var hold = " Hold";

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count += 1;
    break;
    case 7:
    case 8:
    case 9:
    break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
    count -= 1;
    break;
  }

  if (count > 0) {
    return count + bet;
  } else {
    return count + hold;
      }

  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
