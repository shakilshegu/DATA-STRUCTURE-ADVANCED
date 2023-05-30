class minheap{
    constructor(){
        this.heap=[]
    }
    
    leftchild(i){
       return  2*i+1
    }

    rightchild(i)
{
    return 2*i+2
}

parents(i){
    return Math.floor((i-1)/2)
}

swap(i,j){
    [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
}

size(){
    return this.heap.length-1
}
    insert(value){

        this.heap.push(value)
        this.shiftup(this.size())
    }
   
    shiftup(i){
       let parent=this.parents(i)
    while(i>=0&& this.heap[i]<this.heap[parent]){
        this.swap(i,parent)
        i=parent
        parent=this.parents(i)
      } 
    }


    delete(){
        this.swap(0,this.size())
        this.heap.pop()
        this.shiftdown(0)
    }

    shiftdown(i){
        let size=this.size()
        let left=this.leftchild(i)
        let right=this.rightchild(i)
        let smallest

        while(left<=size){
            if(right<=size&&this.heap[right]<this.heap[left]){
                smallest=right
            }else{
                smallest=left
            }
            if(this.heap[i]>this.heap[smallest]){
                this.swap(i,smallest)
                i=smallest
                left=this.leftchild(i)
            }else{
                return 
            }
        }
    }
    heapbuild(array){
        this.heap=[...array]
        for(let i=this.parents(this.size());i>=0;i--){
            this.shiftdown(i)
        }
    }
        
    }


let h=new minheap()
let array=[6,1,5,4,7,9,1]
h.insert(34)
h.insert(38)
h.insert(67)
h.insert(18)
h.insert(87)
h.insert(14)
h.delete()

console.log(h.heapbuild(array));

console.log(h);