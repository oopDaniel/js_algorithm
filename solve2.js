import Q from './priorityQueue'

export default class PrimMST {
  constructor (g) {
    this.graph = g
    this.mst = []
    this._weight = 0

    const q = new Q(e => e._weight)
    const marked = Array.from(new Array(q.v), () => false)

    const origin = 0
    const edges = g.adj(origin)
    marked[origin] = true
    edges.forEach(e => q.enqueue(e))

    while (!q.isEmpty() && this.mst.length !== g.v - 1) {
      const edge = q.dequeue()
      const v = edge.either()
      const w = edge.other(v)

      if (!(marked[v] && marked[w])) {
        this.mst.push(edge)
        this._weight += edge.weight()
        const x = marked[v] ? w : v
        marked[x] = true
        const edges = g.adj(x)
        edges.forEach(e => {
          if (!marked[e.other(x)]) q.enqueue(e)
        })
      }
    }
  }

  edges () {
    return this.mst
  }

  weight () {
    return this._weight
  }
}
