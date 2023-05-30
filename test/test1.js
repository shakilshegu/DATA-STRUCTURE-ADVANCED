class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class Binerysearchtree{
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
            if(root.right === null){
                root.right = newnode
            }else{
                this.insertNode(root.right,newnode)
            }
        }
    }
    preOrder(root){
        if(root){
              console.log(root.value);
              this.preOrder(root.left)
              this.preOrder(root.right)
        }
    }

}

const bst = new Binerysearchtree()
bst.insert(33)
bst.insert(22)
bst.insert(11)
bst.preOrder(bst.root)
