class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinerySearchtree{
    constructor(){
        this.root = null
    }
    insert(value){
        const newnode = new Node(value)
        if(this.root === null){
            this.root = newnode
        }else{
            this.insertNode(this.root,newnode)
        }
    }
    insertNode(root,newnode){
        if(newnode.value <root.value){
           if(root.left === null){
            root.left = newnode
           }else{
            this.insertNode(root.left,newnode)
           }
        }else{
            if(root.right === null){
                root.right = newnode
            }else{
                this.insertNode(root.right,newnode)
            }
        }
    }

  search(root,value){
    if(!root){
        return false
    }else{
    if(root.value === value){
        return true
    }else if(value<root.value){
        return this.search(root.left,value)
    }else{
        return this.search(root.right,value)
    }
    }
  }
  preOrder(root){
    if(root){
        console.log(root.value)
        this.preOrder(root.left)
        this.preOrder(root.right)
    }
  }
  inOder(root){
    if(root){
        this.inOder(root.left)
        console.log(root.value)
        this.inOder(root.right)
    }
  }
  postOder(root){
    if(root){
        this.postOder(root.left)
        this.postOder(root.right)
        console.log(root.value);
    }
  }
  min(root){
    if(root.left){
        return this.min(root.left)
    }else{
        return root.value
    }
  }
  max(root){
    if(root.right){
        return this.max(root.right)
    }else{
        return root.value
    }
  }
  height(root){
    if(root === null){
        return 0
    }else{
        const leftHeight = this.height(root.left)
        const rightHeight = this.height(root.right)
        return Math.max(leftHeight,rightHeight)+1;
    }
}

  isbst(root){
    if(!root){
        return true
    }
    if(root.left && this.max(root.left)>root.value){
        return false
    }
    if(root.right && this.min(root.left)>root.value){
        return false
    }
    if(!this.isbst(root.left) || !this.isbst(root.right)){
      return false
    }
    return true
  }
   delete(value){
    this.root = this.deleteNode(this.root,value)
   }
  deleteNode(root,value){
    if(!root){
        return root
    }
    if(value<root.value){
        root.left = this.deleteNode(root.left,value)
    }else if(value>root.value){
        root.right = this.deleteNode(root.right,value)
    }else{
        if(!root.left && !root.right){
        return null
        }
        if(!root.left){
            return root.left
        }else if(!root.right){
            return root.right
        }
        root.value = this.min(root.right)
        root.right = this.deleteNode(root.right,root.value)
    }
  }
}

const bst = new BinerySearchtree()
bst.insert(10)
bst.insert(5)
bst.insert(6)
bst.insert(3)
bst.insert(11)
console.log(bst.search(bst.root, 6)); // true
bst.preOrder(bst.root)
console.log("min",bst.min(bst.root)); // 3
console.log("Max",bst.max(bst.root));
bst.delete(11)
bst.preOrder(bst.root)
console.log("height",bst.height(bst.root));