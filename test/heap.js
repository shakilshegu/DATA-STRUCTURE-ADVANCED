class minheap{
    constructor(){
        this.heap = []
    }
    leftCHaild(i){
        return 2*i+1
    }
    rightchaild(i){
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
        let parent = this.parents(i)
    while (i>=0 && this.heap[i]<this.heap[parent]) {
        this.swap(i,parent)
        i =parent
        parent = this.parents(i)
    }    
   }
   delete(){
    this.swap(0,this.size())
    this.heap.pop()
    this.shiftdown(0)
   }
   shiftdown(i){
    let size = this.size()
    let left = this.leftCHaild(i)
    let right = this.rightchaild(i)
    let smallest
    while(left<=size){
        if(right<=size && this.heap[right]<this.heap[left]){
            smallest = right
        }else{
            smallest = left
        } 
        if(this.heap[i]>this.heap[smallest]){
            this.swap(i,smallest)
            i=smallest
            left = this.leftCHaild(i)
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