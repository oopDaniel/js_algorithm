export default class EdgeWeightedDigraph {
  constructor (v) {
    this.v = v
    this._adj = []
    this._edges = []
    for (let i = 0; i < v; i++) {
      this._adj.push([])
    }
  }

  addEdge (edge) {
    const v = edge.from()
    this._adj[v].push(edge)
    this._edges.push(edge)
  }

  adj (v) {
    return this._adj[v]
  }

  edges () {
    return this._edges
  }

  toString () {
    let s = ''
    for (let i = 0; i < this.v; i++) {
      s += `${i}: (` + this._adj[i].map(e => e.toString()).join(' | ') + ')\n'
    }
    return s
  }
}
