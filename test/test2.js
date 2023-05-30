class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class Binerytree{
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
        if(newnode.value<root.value){
            if(root.left === null){
                root.left = newnode
            }else{
                this.insertNode(root.left,newnode)
            }
        }else{
            if(root.right == null){
                root.right = newnode
            }else{
                this.insertNode(root.left,newnode)
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
    delete(value){
        this.root = this.deteteNode(this.root,value)
    }

    deteteNode(root,value){
        if(root === null){
            return root
        }
        if(value<root.value){
            root.left = this.deteteNode(root.left,value)
        }else if(value>root.value){
            root.right = this.deteteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deteteNode(root.right,root.value)
        }
        return root
    }
    


    height(node) {
        if (node === null) {
          return 0;
        } else {
          const leftHeight = this.height(node.left);
          const rightHeight = this.height(node.right);
          return Math.max(leftHeight, rightHeight) + 1;
        }
      }
    


    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
    if(root){
        this.inOrder(root.left)
        console.log(root.value);
        this.inOrder(root.right)
    }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
    isBst(root){
        if(!root){
            return false
        }
        if(root.left && this.max(root.left)>root.value){
            return false
        }
        if(root.right && this.min(root.right)< root.value){
            return false
        }
        if(!this.isBst(root.left) || !this.isBst(root.right)){
            return false
        }
        return true
    }
}

const bst = new Binerytree()
bst.insert(10)
bst.insert(5)
bst.insert(6)
bst.insert(3)
bst.insert(11)
console.log(bst.search(bst.root,22));
console.log("minn",bst.min(bst.root));
console.log("Maax",bst.max(bst.root));
bst.delete(11)
console.log("Height:", bst.height(bst.root));
bst.preOrder(bst.root)
console.log(bst.isBst(bst.root)); // tru
