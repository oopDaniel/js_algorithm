import Q from './priorityQueue'

export default class DijkstraSP {
  constructor (g, origin) {
    this.origin = origin
    this._distTo = Array.from(new Array(g.v), () => Number.POSITIVE_INFINITY)
    this._edgeTo = [null]
    const q = new Q()

    this._distTo[0] = 0
    q.enqueue(0, 0.0)

    while (!q.isEmpty()) {
      const v = q.dequeue()
      for (let edge of g.adj(v)) {
        const w = edge.to()
        if (this._distTo[w] > edge.weight() + this._distTo[v]) {
          this._distTo[w] = edge.weight() + this._distTo[v]
          this._edgeTo[w] = v
          if (q.has(w)) q.update(w, this._distTo[w])
          else q.enqueue(w, this._distTo[w])
        }
      }
    }
  }

  pathTo (v) {
    if (this._edgeTo[v] === undefined) return null
    const path = []
    let x = v
    while (x !== null) {
      path.unshift(x)
      x = this._edgeTo[x]
    }
    return path.join(' -> ')
  }

  distTo (v) {
    return this._distTo[v] === undefined ? null : this._distTo[v]
  }
}
