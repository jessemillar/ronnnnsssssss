import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

clock.granularity = "minutes";

let pos1 = {x: -8, y: 66};
let pos2 = {x: 54, y: 60};
let pos3 = {x: 102, y: 60};
let pos4 = {x: 152, y: 58};
let pos5 = {x: 218, y: 56};

let pos1b = {x: 24, y: 60};
let pos2b = {x: 72, y: 60};
let pos3b = {x: 122, y: 58};
let pos4b = {x: 188, y: 56};

let colon = document.getElementById("colon");
let hourLeft = document.getElementById("hour-left");
let hourRight = document.getElementById("hour-right");
let minuteLeft = document.getElementById("minute-left");
let minuteRight = document.getElementById("minute-right");

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hour = util.zeroPad(today.getHours() - 3 % 12 || 12);
  let minute = util.zeroPad(today.getMinutes());
    
  if (hour > 9) {
    util.setLargeDigitValue(hourLeft, ("" + hour)[0]);
    
    util.setDigitPosition(hourLeft, pos1);
    util.setDigitPosition(hourRight, pos2);
    util.setDigitPosition(colon, pos3);
    util.setDigitPosition(minuteLeft, pos4);
    util.setDigitPosition(minuteRight, pos5);
  } else {
    hourLeft.style.display = "none";
    
    util.setDigitPosition(hourRight, pos1b);
    util.setDigitPosition(colon, pos2b);
    util.setDigitPosition(minuteLeft, pos3b);
    util.setDigitPosition(minuteRight, pos4b);
  }
  
  util.setLargeDigitValue(hourRight, ("" + hour)[1]);
  
  util.setLargeDigitValue(minuteLeft, ("" + minute)[0]);
  util.setLargeDigitValue(minuteRight, ("" + minute)[1]);
}
