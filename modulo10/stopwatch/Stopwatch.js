class Stopwacth {
  elapsedTimeInSeconds = 0;

  start() {
    setInterval(() => {
      this.elapsedTimeInSeconds++;
    }, 1000);
  }

  stop() {}

  resizeTo() {}
}

const sw1 = new Stopwacth();
sw1.start();
console.log(sw1.elapsedTimeInSeconds);
setTimeout(() => console.log(sw1.elapsedTimeInSeconds), 3000);