export default class Graph {
  constructor (v) {
    this.v = v
    this.adj = []
    for (let i = 0; i < v; i++) {
      this.adj.push([])
    }
  }

  addEdge (v, w) {
    this.adj[v].push(w)
    this.adj[w].push(v)
  }

  adj (v) {
    return this.adj[v]
  }
}
