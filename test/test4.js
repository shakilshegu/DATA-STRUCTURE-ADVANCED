 class Node {
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
            this.insetNode(this.root,newnode)
        }
    }
    insetNode(root,newnode){
        if(newnode.value < root.value){
            if(root.left === null){
                root.left = newnode
            }else{
                this.insetNode(root.left,newnode)
            }

        }else{
            if(root.right === null){
                root.right = newnode
            }else{
                this.insetNode(root.right,newnode)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return false
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
    height(root){
        if(root === null){
            return 0
        }else{
            const leftHeight = this.height(root.left)
            const rightHeight = this.height(root.right)
            return Math.max(leftHeight,rightHeight)+1;
        }
    }
    isBst(root){
        if(!root){
            return true
        }
        if(root.left && this.max(root.left) > root.value){
            return false
        }
        if(root.right && this.min(root.right)<root.value){
            return false
        }
        if(!this.isBst(root.left) || !this.isBst(root.right)){
            return false
        }
    return true
    }

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }

    

    preOrder(root){
        if(root){
             console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
}


const bst = new BinerySearchtree()
bst.insert(10)
bst.insert(5)
bst.insert(6)
bst.insert(3)
bst.preOrder(bst.root)
console.log(bst.isBst(bst.root)); // true
console.log("height",bst.height(bst.root));