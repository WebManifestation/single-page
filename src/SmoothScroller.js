export default class SmoothScroller {
  constructor(endPosition = 0, duration = 1000) {
    this.startPosition = document.documentElement.scrollTop;
    this.currentPosition = document.documentElement.scrollTop;
    this.endPosition = endPosition;
    this.duration = duration;
    this.durationPosition = 0;
    this.prevTime = Date.now();
    this.currentTime = Date.now();
    this.isRunning = false;
  }
  mapValues(n, start1, stop1, start2, stop2) {
    return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
  }
  getNextPosition() {
    this.currentTime = Date.now();
    const timeDiff = this.currentTime - this.prevTime;
    this.prevTime = Date.now();
    this.durationPosition += timeDiff;
    if (this.durationPosition > this.duration) {
      this.isRunning = false;
      return this.endPosition;
    }

    const t = this.durationPosition / this.duration;

    return this.mapValues(
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
      0,
      1,
      this.startPosition,
      this.endPosition
    );
  }
  startScrolling() {
    this.startPosition = document.documentElement.scrollTop;
    this.isRunning = true;
    this.prevTime = Date.now();
    window.requestAnimationFrame(this.handleRAF.bind(this));
  }
  handleRAF() {
    if (this.isRunning) {
      window.requestAnimationFrame(this.handleRAF.bind(this));
      const nextScrollPosition = this.getNextPosition();
      window.scrollTo({
        top: nextScrollPosition,
      });
    }
  }
}
