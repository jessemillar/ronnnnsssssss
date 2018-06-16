// Add zero in front of numbers < 10
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export function drawDate(dateDigits, month, day) {
  let month = ("" + month++);
  let day = ("" + day);
  
  if (month.length > 1) {
    setSmallDigitValue(dateDigits[0], month[0]);
    setSmallDigitValue(dateDigits[1], month[1]);
    setSmallDigitValue(dateDigits[2], "Dash");
  } else {
    setSmallDigitValue(dateDigits[0], month[0]);
    setSmallDigitValue(dateDigits[1], "Dash");
  }
}

export function drawSteps(stepDigits, steps) {
  let steps = ("" + steps);
      
  for (var i = steps.length; i > 0; i--) {
    setSmallDigitValue(stepDigits[i], steps[i]);
  }
  
  setSmallDigitValue(stepDigits[stepDigits.length - 1 - steps.length], "Dollar");
  
  for (var i = 0; i < stepDigits.length - 1 - steps.length; i++) {
    stepDigits[i].style.display = "none";
  }
}

export function setDigitPosition(digit, pos) {
  digit.x = pos.x;
  digit.y = pos.y;
}

export function setSmallDigitValue(digit, val) {
  digit.image = `small-${val}.png`;
}

export function setLargeDigitValue(digit, val) {
  digit.image = `large-${val}.png`;
}

export function setDayValue(day, val) {
  switch(val) {
    case 0:
      day.image = `small-Sun.png`;
      break;
    case 1:
      day.image = `small-Mon.png`;
      break;
    case 2:
      day.image = `small-Tue.png`;
      break;
    case 3:
      day.image = `small-Wed.png`;
      break;
    case 4:
      day.image = `small-Thu.png`;
      break;
    case 5:
      day.image = `small-Fri.png`;
      break;
    case 6:
      day.image = `small-Sat.png`;
      break;
  }
}