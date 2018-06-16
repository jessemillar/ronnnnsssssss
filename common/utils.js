// Add zero in front of numbers < 10
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export function setDigitPosition(digit, pos) {
  digit.x = pos.x;
  digit.y = pos.y;
}

export function setLargeDigitValue(digit, val) {
  digit.image = `large-${val}.png`;
}