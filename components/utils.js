const padToTwo = (number) => (number <= 9 ? `0${number}` : number);

export const displayTime = (centiseconds) => {
  // represents 1/100 seconds
  let minutes = 0; //set initial value to 0
  let seconds = 0; //set initial value to 0

  if (centiseconds < 0) {
    //To just display 0 if centiseconds is negative
    centiseconds = 0;
  }

  if (centiseconds > 0) {
    // To return centiseconds as output in a string after passing into padToTwo
    return `00:00:${padToTwo(centiseconds)}`;
  }

  let remainingCentiseconds = centiseconds % 100; // To capture remainder centiseconds for values above 100

  seconds = (centiseconds - remainingCentiseconds) / 100;

  if (seconds < 60) {
    return `00:${padToTwo(seconds)}:${padToTwo(centiseconds)}`;
  }

  let remainingSeconds = seconds % 60;
  minutes = (seconds - remainingSeconds) / 60;

  return `${padToTwo(minutes)}:${padToTwo(seconds)}:${padToTwo(centiseconds)}`;
};
