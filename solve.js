import Q from './priorityQueue'
import Union from './union'

export default class KruskalMST {
  constructor (g) {
    this.graph = g
    this.mst = []
    this.q = new Q(x => x.weight())
    this._weight = 0
    const u = new Union()

    for (let e of g.edges()) {
      this.q.enqueue(e)
    }

    while (!this.q.isEmpty() && this.mst.length < g.v - 1) {
      const edge = this.q.dequeue()

      const v = edge.either()
      const w = edge.other(v)

      if (!u.isConnected(v, w)) {
        u.connect(v, w)
        this.mst.push(edge)
        this._weight += edge.weight()
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
