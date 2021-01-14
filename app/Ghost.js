export class Ghost {
  constructor(className, startIndex, speed) { 
    this.className = className,
    this.currentIndex = startIndex,
    this.isScared = false,
    this.startIndex = startIndex,
    this.speed = speed,
    this.timerId = NaN
  }
}