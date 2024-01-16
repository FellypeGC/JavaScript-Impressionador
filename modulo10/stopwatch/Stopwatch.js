class Stopwacth {
  elapsedTimeInSeconds = 0;
  intervalId = null;

  start() {
    this.intervalId = setInterval(() => {
      this.elapsedTimeInSeconds++;
      console.log(this.formatTime(this.elapsedTimeInSeconds));
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.elapsedTimeInSeconds = 0;
  }

  static formatTime(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor(timeInSeconds % 3600) / 60;
    const seconds = timeInSeconds - hours * 3600 - minutes * 60;

    return `${hours}:${minutes}:${seconds}`;
  }
}

const sw1 = new Stopwacth();
sw1.start();