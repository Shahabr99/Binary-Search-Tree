class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */
  

  insert(val) {
    let newNode = new Node(val)
    
    if(!this.root) {
      this.root = newNode
      return this;
    }
    
    let currentNode = this.root;

    while(currentNode) {
      if(val < currentNode.val) {
        if(!currentNode.left) {
          currentNode.left = newNode;
          break;
        }else{
          currentNode = currentNode.left
        }
      }else{
        if(!currentNode.right){
          currentNode.right = newNode;
          break;
        }else{
          currentNode = currentNode.right;
        
        }
      }
    }
    
    return this;
  } 

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    if (!this.root) {
       this.root = new Node(val)
       return this
    }
    
    if (val < currentNode.val) {
      if(currentNode.left === null) {
        currentNode.left = new Node(val)
        return this;
      }
      return this.insertRecursively(val, currentNode.left)
    } else {
      if(!currentNode.right) {
        currentNode.right = new Node(val)
        return this;
      }
      return this.insertRecursively(val, current.right)
    }
  }


  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val, currentNode= this.root) {
    while(currentNode) {
      if(currentNode.val === val) return currentNode
      if(currentNode.val < val) {
        currentNode = currentNode.right;
        if(!currentNode) return undefined;
      }else{
        currentNode = currentNode.left
        if(!currentNode) return undefined;
      }
    }
  }
  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode=this.root) {
    if(currentNode.val === val) return currentNode;

  
    if(currentNode.val < val) {
      if(!currentNode.right) return undefined;
      currentNode = currentNode.right;
      return this.findRecursively(val, currentNode);
        
    }else{
      if(!currentNode) return undefined;
      currentNode = currentNode.left;
      return this.findRecursively(val, currentNode);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let nodes = []
    let currentNode = this.root;
    function traverse(node) {
      nodes.push(node.val)
      node.left && traverse(node.left)
      node.right && traverse(node.right)
    }
    traverse(currentNode);
    return nodes
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let nodes = []
    let currentNode = this.root;
    function traverse(node) {
      node.left && traverse(node.left);
      nodes.push(node.val);
      node.right && traverse(node.right);
    }
    traverse(currentNode);
    return nodes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}



module.exports = BinarySearchTree;
