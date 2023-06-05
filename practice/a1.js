class Node{
    constructor(value){
        this.value= value
        this.left = null
        this.right =null
    }
}

class Binrysearchtree{
    constructor(){
        this.root = null
    }

    inser(value){
        const newnode= new Node(value)
        if(this.root === null){
            this.root = newnode
        }else{
            this.insertnode(this.root,newnode)
        }
    }
    
    insertnode(root,newnode){
        if(newnode.value<root.value){
            if(root.left === null){
                root.left = newnode
            }else{
                this.insertnode(root.left,newnode)
            }
        }else{
            if(root.right === null){
                root.right = newnode
            }else{
                this.insertnode(root.right,newnode)
            }
            
            
        }
    }

    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true
            }
            if(value<root.value){
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

    Max(root){
        if(root.right){
            return this.Max(root.right)
        }else{
            return root.value
        }
    }

    isbst(root){
        if(!root){
            return true
        }
        if(root.left && this.Max(root.left)>root.value){
            return false
        }
        if(root.right && this.min(root.right)<root.value){
            return false
        }
        if(!this.isbst(root.left) || !this.isbst(root.right)){
            return false
        }
        return true
    }

    hieght(root){
        if(!root){
            return 0
        }else{
            let leftHeight  = this.hieght(root.left)
            let rightHeight = this.hieght(root.right)
            return Math.max(leftHeight,rightHeight)+1;
        }
    }

   preoder(root){
    if(root){
        console.log(root.value)
        this.preoder(root.left)
       this.preoder(root.right)
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
   
   levelOder(){
    let queue = []
    queue.push(this.root)
    while(queue.length){
        let curr = queue.shift()
       if(curr.left){
        queue.push(curr.left)
       }
       if(curr.right){
        queue.push(curr.right)
       }
    }
    
   }


}

const bst = new Binrysearchtree()
bst.inser(11)
bst.inser(22)
bst.inser(33)
bst.inser(3)
bst.inser(21)
bst.inser(35)
bst.preoder(bst.root)
console.log(bst.min(bst.root));
console.log(bst.Max(bst.root));
console.log("height",bst.hieght(bst.root));
console.log(bst.isbst(bst.root));