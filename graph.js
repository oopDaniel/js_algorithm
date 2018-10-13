export default class Graph {
  constructor (v) {
    this.v = v
    this._adj = []
    for (let i = 0; i < v; i++) {
      this._adj.push([])
    }
  }

  addEdge (v, w) {
    this._adj[v].push(w)
    this._adj[w].push(v)
  }

  adj (v) {
    return this._adj[v]
  }
}
