class BinaryTreeNode {
  constructor (val, leftChild = null, rightChild = null) {
    this.val = val
    this.leftChild = leftChild
    this.rightChild = rightChild
  }
}

const createBinaryTree = (treeArray = []) => {
  if (!treeArray) {
    return null
  }
  // const root = new BinaryTreeNode(treeArray[0])
  function createBT (index) {
    if (!treeArray[index]) {
      return null
    }
    const node = new BinaryTreeNode(treeArray[index])
    node.leftChild = createBT(index * 2 + 1)
    node.rightChild = createBT(index * 2 + 2)
    return node
  }
  return createBT(0)
}
// const node = createBinaryTree([1, 2, 3, 4, 5])
// console.log(node.rightChild.leftChild)
