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
    let nodes = [];
    let currentNode = this.root;
    function traverse(node){
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      nodes.push(node.val)
    }
    traverse(currentNode);
    return nodes
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */
  bfs() {
    let node = this.root;
    let queue = [];
    let data = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    let targetNode = this.root;
    let parent;
    while(targetNode.val !== val) {
      parent = targetNode;
      val < targetNode.val ? targetNode.left : targetNode.right
    }
    if(targetNode !== this.root){
      if(targetNode.left === null && targetNode.right === null) {
        if(parent.left === targetNode) {
          parent.left = null
        }else{
          parent.right=null
        }
      }else if(targetNode.left !== null && targetNode.right !== null){
        let rightParent = targetNode;
        let right = targetNode.right;
        if(right.left === null) {
          right.left = targetNode.left
          if (parent.left === targetNode) {
            parent.left = right;
          } else {
            parent.right = right;
          }
        } else {
          while (right.left !== null) {
            rightParent = right;
            right = right.left;
          }
          if (parent.left === targetNode) {
            parent.left.val = right.val;
          } else {
            parent.right.val = right.val;
          }
          if (right.right !== null) {
            rightParent.left = right.right;
          } else {
            rightParent.left = null;
          }
        }
      } else {
        if (parent.left === nodeToRemove) {
          if (nodeToRemove.right === null) {
            parent.left = nodeToRemove.left;
          } else {
            parent.left = nodeToRemove.right;
          }
        } else {
          if (nodeToRemove.right === null) {
            parent.right = nodeToRemove.left;
          } else {
            parent.right = nodeToRemove.right;
          }
        }
      }
    }
    return nodeToRemove;
  }


  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {
    if (current === null) return;
    return maxDepth(current) - minDepth(current) <= 1;
    function minDepth(current) {
      if (current === null) return 0;
      return 1 + Math.min(minDepth(current.left), minDepth(current.right));
    }
    function maxDepth(current) {
      if (current === null) return 0;
      return 1 + Math.max(maxDepth(current.left), maxDepth(current.right));
    }
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    // if the tree is too small, return
    if (!this.root || (!this.root.left && !this.root.right)) return;
    while (current) {
      // Current is largest and has a left subtree and 2nd largest is the largest in that subtree
      if (current.left && !current.right) {
        return this.findSecondHighest(current.left);
      }
      // Current is parent of largest and largest has no children so current is 2nd largest
      if (current.right && (!current.right.left && !current.right.right)) {
        return current.val;
      }
      current = current.right;
    }
  }
  dfsInOrderIterative() {
    let cur = this.root;
    let stack = [];
    let dfs = [];
    while (stack.length > 0 || cur) {
      while (cur) {
        stack.push(cur);
        cur = cur.left;
      }
      cur = stack.pop();
      if (cur) {
        dfs.push(cur.val);
        cur = cur.right;
      }
    }
    return dfs;
  }
}




module.exports = BinarySearchTree;
