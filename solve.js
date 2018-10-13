export default class BFS {
  constructor (graph, s) {
    this.origin = s
    this.marked = Array.from(new Array(graph.v), () => false)
    this.edgeTo = new Array(graph.v)

    const queue = []
    queue.push(s)
    this.marked[s] = true

    while (queue.length !== 0) {
      const v = queue.shift()
      console.log(`- tracking: ${v}`)

      for (let w of graph.adj(v)) {
        if (!this.marked[w]) {
          queue.push(w)
          this.marked[w] = true
          this.edgeTo[w] = v
        }
      }
    }

  }

  pathTo (v) {
    if (!this.marked[v]) return null
    const res = [v]
    let p = v
    while (p !== this.origin) {
      p = this.edgeTo[p]
      res.unshift(p)
    }
    return res
  }
}
