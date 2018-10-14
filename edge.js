export default class Edge {
  constructor (v, w, weight) {
    this.v = v
    this.w = w
    this._weight = weight
  }

  either () {
    return this.v
  }

  other (v) {
    return v === this.v ? this.w : this.v
  }

  weight () {
    return this._weight
  }

  toString () {
    return `${this.v}-${this.w}: ${this._weight}`
  }
}
