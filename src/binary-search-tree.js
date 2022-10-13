const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.startRoot = null;
  }


  root() {
    let temp=this.startRoot;
    return temp;
  }

  add(data) {
    const newNode = new Node(data)

    if (!this.startRoot){
      this.startRoot = newNode;
      return;
    }
    else{
      let currentNode=this.startRoot;
      
      while(currentNode){
        if(newNode.data<currentNode.data){
          if(!currentNode.left){
            currentNode.left = newNode;
            return;
          }
          currentNode = currentNode.left
        }
        else if(newNode.data>currentNode.data){
          if(!currentNode.right){
            currentNode.right = newNode;
            return;
          }
          currentNode = currentNode.right;
        }
      }
    }
    
  }

  has(temp) {
    let currentNode=this.startRoot;
    while(currentNode){
      if (currentNode.data===temp){
        return true;
      }
      else if(currentNode.data>temp){
        currentNode=currentNode.left;
      }
      else{
        currentNode=currentNode.right;
      }
    }
    return false;
  }

  find(temp) {
    let currentNode=this.startRoot;
    while(currentNode){
      if (currentNode.data===temp){
        return currentNode;
      }
      else if(currentNode.data>temp){
        currentNode=currentNode.left;
      }
      else{
        currentNode=currentNode.right;
      }
    }
    return null;
  }

  remove(temp){
    let currentNode=this.startRoot;
    let deletedNode=null;
    let prevNode=null;

    if(this.startRoot==null){
      return;
    }

    while(currentNode){
      if(currentNode.data==temp){
        deletedNode=currentNode;
        break;
      }
      else if (currentNode.data>temp){
        prevNode=currentNode;
        currentNode=currentNode.left;
      }
      else{
        prevNode=currentNode;
        currentNode=currentNode.right;
      }
    }

    if(deletedNode==this.startRoot){
      let currentNodeTemp=null;
      if(this.startRoot.right){
        currentNodeTemp=this.startRoot.right;
      }
      else{
        currentNodeTemp=this.startRoot.left;
      }
      
      let prevNodeTemp=deletedNode;
      while(currentNodeTemp.left){
        prevNodeTemp=currentNodeTemp;
        currentNodeTemp=currentNodeTemp.left;
      }
      prevNodeTemp.left=currentNodeTemp.right;
      this.startRoot=currentNodeTemp;
      this.startRoot.left=deletedNode.left;
      this.startRoot.right=deletedNode.right;
    }
    else if(deletedNode.right==null && deletedNode.left==null){
      if(prevNode.left==deletedNode){
        prevNode.left=null;
      }
      else{
        prevNode.right=null;
      }
    }
    else if(deletedNode.right!=null && deletedNode.left!=null){
    let changedNode = deletedNode.right;
    let prevChangedNode = deletedNode;
      while(changedNode.left){
        prevChangedNode=changedNode;
        changedNode=changedNode.left;
      }
      prevChangedNode.right=changedNode.right;;
      changedNode.right=deletedNode.right;
      changedNode.left=deletedNode.left;
      if (prevNode.left==deletedNode){
        prevNode.left=changedNode;
      }
      else{
        prevNode.right=deletedNode;
      }
    }
    else if(deletedNode.right!=null || deletedNode.left!=null){
      if(deletedNode.right!=null){
        if (prevNode.left==deletedNode){
          prevNode.left=deletedNode.right;
        }
        else{
          prevNode.right=deletedNode.right;
        }
      }
      else{
        if (prevNode.left==deletedNode){
          prevNode.left=deletedNode.left;
        }
        else{
          prevNode.right=deletedNode.left;
        }
      }
    }
  }

  min() {
    let currentNode = this.startRoot;
    while(currentNode.left){
      currentNode=currentNode.left
    }
    return currentNode.data;
  }

  max() {
    let currentNode = this.startRoot;
    while(currentNode.right){
      currentNode=currentNode.right
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};