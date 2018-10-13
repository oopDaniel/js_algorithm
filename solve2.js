export default class DFS {
  constructor (graph, s = 0) {
    this.s = s
    this.marked = Array.from(new Array(graph.v), () => false)
    this.edgeTo = new Array(graph.v)

    this._dfs(graph, s)
  }

  _dfs (graph, v) {
    console.log(`- tracking: ${v}`)
    this.marked[v] = true
    for (let x of graph.adj(v)) {
      if (!this.marked[x]) {
        this._dfs(graph, x)
        this.edgeTo[x] = v
      }
    }
  }

  pathTo (v) {
    if (!this.marked[v]) return null

    const res = [v]
    let p = v
    while (p !== this.s) {
      p = this.edgeTo[p]
      res.unshift(p)
    }
    return res
  }
}
