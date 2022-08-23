class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }


  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) printTimeCallback();
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 60)
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    let seconds = 0;
    if (this.currentTime > 60) {
      seconds = this.currentTime % 60;
      return seconds;
    }
    return this.currentTime
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let num = value.toString()
    if (num.length === 1) {
      return '0' + num;
    }
    return num;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let mm = this.computeTwoDigitNumber(this.getMinutes());
    let ss = this.computeTwoDigitNumber(this.getSeconds());
    return `${mm}:${ss}`;
  }
}
