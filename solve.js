
const RED = true
const BLACK = false

export default class ST {
  put (key, value) {
    this.root = this._put(this.root, key, value)
  }

  _put (tree, key, value) {
    if (!tree) tree = new Node(key, value, RED)
    else {
      if (key > tree.key) {
        tree.right = this._put(tree.right, key, value)
      } else if (key < tree.key) {
        tree.left = this._put(tree.left, key, value)
      } else {
        tree.value = value
      }

      if (isRed(tree.right) && !isRed(tree.left)) tree = this.rotateLeft(tree)
      if (isRed(tree.left) && isRed(tree.left.left)) tree = this.rotateRight(tree)
      if (isRed(tree.left) && isRed(tree.right)) this.flipColor(tree)
    }
    return tree
  }

  rotateLeft (node) {
    if (!isRed(node.right)) throw new Error('Needless rotateLeft')
    const x = node.right
    node.right = x.left
    x.left = node
    x.color = node.color
    node.color = RED
    return x
  }

  rotateRight (node) {
    if (!isRed(node.left)) throw new Error('Needless rotateLeft')
    const x = node.left
    node.left = x.right
    x.right = node
    x.color = node.color
    node.color = RED
    return x
  }

  flipColor (node) {
    if (!isRed(node.left) || !isRed(node.right)) throw new Error('Needless flipColor')
    node.left.color = node.right.color = BLACK
    node.color = RED
  }

  delete (key) {
    this.put(key, null)
  }

  get (key) {
    let tree = this.root
    while (tree !== null) {
      if (key > tree.key) {
        tree = tree.right
      } else if (key < tree.key) {
        tree = tree.left
      } else {
        return tree.value
      }
    }
    return null
  }

  has (key) {
    return Boolean(this.get(key))
  }
}

class Node {
  constructor (key, value = null, color = RED) {
    this.key = key
    this.value = value
    this.left = null
    this.right = null
    this.color = color
  }
}

function isRed (node) {
  if (!node) return false // black by default
  return node.color === RED
}
