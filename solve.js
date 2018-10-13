export default class DFS {
  constructor (graph, s = 0) {
    this.marked = Array.from(new Array(graph.v), () => false)
    this.edgeTo = new Array(graph.v)
    this.origin = s
    const stack = []

    stack.push(s)
    this.edgeTo[s] = null

    while (stack.length !== 0) {
      const v = stack.pop()
      if (this.marked[v]) continue
      this.marked[v] = true
      console.log(`-- tracking: ${v}`)
      for (let x of graph.adj(v)) {
        if (!this.marked[x]) {
          stack.push(x)
          this.edgeTo[x] = v
        }
      }
    }
  }

  pathTo (v) {
    if (!this.marked[v]) return null

    const stack = [v]
    let p = v
    while (p !== this.origin) {
      p = this.edgeTo[p]
      stack.unshift(p)
    }
    return stack
  }
}
