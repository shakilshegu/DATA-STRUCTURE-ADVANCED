class treenode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class binarySearchTree{
    constructor() {
       this.root=null 
    }

    insert(value){
        let newnode=new treenode(value)
        if(!this.root){
            this.root=newnode
            return
        }
        this.insertNode(this.root,newnode)
        
    }

    insertNode(root,newnode){
        if(newnode.value<root.value){
            if(root.left==null){
                root.left=newnode
            }else{
                this.insertNode(root.left,newnode)
            }
        }else{
            if(root.right==null){
                root.right=newnode
            }else{
                this.insertNode(root.right,newnode)
            }
        }
    }
 
    preorder(){
        this.preordernode(this.root)
    }
    preordernode(root){
        if(root==null){
            return false
        }
            console.log(root.value);
            this.preordernode(root.left)
            this.preordernode(root.right)
        
    }

    inorde(){
        this.inorder(this.root)
    }
    inorder(root){
        if(root==null){
            return false
        }
            this.inorder(root.left)
            console.log(root.value);
            this.inorder(root.right)
        
    }

    postorder(){
        this.postordernode(this.root)
    }
    postordernode(root){
        if(root==null){
            return false
        }
            this.postordernode(root.left)           
            this.postordernode(root.right)
            console.log(root.value);
        
    }


}

let bst=new binarySearchTree()
bst.insert(23)
bst.insert(24)
bst.insert(12)
bst.insert(13)
bst.insert(56)


console.log("preorder,");
bst.preorder()
console.log("inorder,");
bst.inorde()
console.log("postorder,");
bst.postorder()

// console.log(bst);