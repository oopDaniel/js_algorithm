export default class Union {
  constructor () {
    this.map = {}
  }

  connect (a, b) {
    // New root
    if (this.map[a] === undefined && this.map[b] === undefined) {
      this.map[a] = this.map[b] = a

    // Connecting
    } else if (this.map[a] !== undefined && this.map[b] !== undefined) {
      const ra = this._root(a)
      const rb = this._root(b)
      this.map[rb] = this.map[ra]

    // Exactly one connected component
    } else {
      const x = this.map[a] === undefined ? this.map[b] : this.map[a]
      const root = this._root(x)
      this.map[a] = this.map[b] = root
    }
  }

  isConnected (a, b) {
    const ra = this._root(a)
    const rb = this._root(b)
    if (ra === null || rb === null) return false
    return ra === rb
  }

  _root (x) {
    if (this.map[x] === undefined) return null
    while (x !== this.map[x]) {
      this.map[x] = this.map[this.map[x]]
      x = this.map[x]
    }
    return x
  }
}
