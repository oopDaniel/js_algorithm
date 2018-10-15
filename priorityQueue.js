export default class MinPriorityQueue {
  constructor () {
    this.map = {}
    this.key = [null]
    this.heap = [null]
  }

  enqueue (key, value) {
    this.heap.push(value)
    this.key.push(key)
    this.map[key] = this.heap.length - 1
    this.swim(value, this.heap.length - 1)
  }

  dequeue () {
    const key = this.key[1]
    this.swap(1, this.heap.length - 1)
    this.swap(1, this.heap.length - 1, this.key)
    this.heap.pop()
    this.key.pop()
    this.sink(this.heap[1], 1)
    return key
  }

  update (key, value) {
    const index = this.map[key]
    const originalValue = this.heap[index]
    if (value > originalValue) {
      this.heap[index] = value
      this.sink(value, index)
    } else {
      this.heap[index] = value
      this.swim(value, index)
    }
  }

  swim (value, n) {
    if (n > 1) {
      const parentIndex = ~~(n / 2)
      const valueP = this.heap[parentIndex]

      if (value < valueP) {
        const nodeKey = this.key[n]
        const parentKey = this.key[parentIndex]

        this.swap(n, parentIndex)
        this.swap(n, parentIndex, this.key)
        this.map[nodeKey] = parentIndex
        this.map[parentKey] = n
        this.swim(this.heap[parentIndex], parentIndex)
      }
    }
  }

  sink (value, n) {
    const maxSize = this.heap.length - 1
    let child = n * 2
    if (child <= maxSize) {
      const vp = value
      let vc = this.heap[child]
      if (child + 1 <= maxSize && vc > this.heap[child + 1]) {
        child++
        vc = this.heap[child]
      }
      if (vc < vp) {
        const parentKey = this.key[n]
        const childKey = this.key[child]
        this.swap(n, child)
        this.swap(n, child, this.key)
        this.map[parentKey] = child
        this.map[childKey] = n
        this.sink(this.heap[child], child)
      }
    }
  }

  swap (a, b, targetArray = this.heap) {
    [targetArray[a], targetArray[b]] = [targetArray[b], targetArray[a]]
  }

  size () {
    return this.heap.length - 1
  }

  isEmpty () {
    return this.size() === 0
  }

  has (x) {
    return this.map[x] !== undefined
  }
}
