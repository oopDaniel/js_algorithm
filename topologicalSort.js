export default (graph) => {
  const order = []
  const marked = Array.from(new Array(graph.v), () => false)
  for (let i = 0; i < graph.v; i++) {
    if (!marked[i]) dfs(graph, i, marked, order)
  }
  return order
}

function dfs (g, v, marked, order) {
  marked[v] = true
  for (let edge of g.adj(v)) {
    const w = edge.to()
    if (!marked[w]) dfs(g, w, marked, order)
  }
  order.unshift(v)
}
