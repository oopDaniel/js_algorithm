export default class Edge {
  constructor (v, w, weight) {
    this.v = v
    this.w = w
    this._weight = weight
  }

  from () {
    return this.v
  }

  to () {
    return this.w
  }

  weight () {
    return this._weight
  }

  toString () {
    return `${this.v}->${this.w}: ${this._weight}`
  }
}
