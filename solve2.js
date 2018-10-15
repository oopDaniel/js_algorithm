import topologicalSort from './topologicalSort'

export default class AcyclicSP {
  constructor (g, origin) {
    this.origin = origin
    this._distTo = Array.from(new Array(g.v), () => Number.POSITIVE_INFINITY)
    this._edgeTo = [null]

    this._distTo[0] = 0
    const vertices = topologicalSort(g)

    for (let v of vertices) {
      for (let edge of g.adj(v)) {
        this.relax(edge)
      }
    }
  }

  relax (edge) {
    const v = edge.from()
    const w = edge.to()
    if (this._distTo[w] > edge.weight() + this._distTo[v]) {
      this._distTo[w] = edge.weight() + this._distTo[v]
      this._edgeTo[w] = v
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
