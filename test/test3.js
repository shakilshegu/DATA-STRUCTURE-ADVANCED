class Noed {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchtree{
    constructor(){
        this.root = null
    }

    insert(value){
        const newnode = new Noed(value)
        if(this.root === null){
            this.root = newnode
        }else{
            this.insertNoed(this.root,newnode)
        }
    }
    insertNoed(root,newnode){
        if(newnode.value <root.value){
            if(root.left === null){
                root.left = newnode
            }else{
              this.insertNoed(root.left,newnode)
            }
        }else{
            if(root.right === null){
                root.right = newnode
            }else{
                this.insertNoed(root.right,newnode)
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
        }
         return root.value
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
    
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root === null){
            return root
        }
        if(value<root.value){
            root.left = this.deleteNode(root.left,value)
        }else if( value > root.value){
            root.right = this.deleteNode(root.right,value)
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
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }
    isBst(root){
        if(!root){
            return true
        }
        if(root.left && this.max(root.left)>root.value){
            return false
        }
        if(root.right && this.min(root.right)<root.value){
            return false
        }
        if(!this.isBst(root.left)|| !this.isBst(root.right)){
            return false
        }
        return  true
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
    height(node){
        if(node === null){
            return 0
        }else{
            const leftHeight = this.height(node.left);
            const rightHeight = this.height(node.right)
            return Math.max(leftHeight,rightHeight)+1;
        }
    }
}

const bst = new BinarySearchtree()
bst.insert(10)
bst.insert(5)
bst.insert(6)
bst.insert(3)
bst.insert(11)
bst.delete(11)
console.log("minn",bst.min(bst.root));
console.log("Maax",bst.max(bst.root));
// bst.preOrder(bst.root)
bst.inOrder(bst.root)
console.log("height",bst.height(bst.root));