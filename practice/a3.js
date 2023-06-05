class minheap{
    constructor(){
        this.heap = []
    }
    leftchaild(i){
        return 2*1+1
    }
    rightchaild(i){
        return 2*i+2
    }
    parants(i){
        return Math.floor((i-1)/2)
    }
    size(){
        return this.heap.length-1
    }
    swap(i,j){
        [this.heap[i],this.heap[j] = this.heap[j],this.heap[i]]
    }
    insert(value){
        this.heap.push(value)
        this.shiftup(this.size())
    }
    shiftup(i){
        while(i>=0 &&this.heap[i]<this.heap[this.parants(i)]){
            this.swap(i,this.parants(i))
            i=this.parants(i)
        }
    }
    detete(){
        this.swap(0,this.size())
        this.heap.pop()
        this.shiftdown(0)
    }
    shiftdown(i){
        let size = this.size()
        let left =this.leftchaild(i)
        let right = this.rightchaild(i)
        let smallest;
       
        while (left<=size) {
            if(right<=size && this.heap[right]<this.heap[left]){
                smallest =right
            }else{
                smallest =right
            }
            if(this.heap[i]>this.heap[smallest]){
                this.swap(i,smallest);
                i=smallest
                left = this.leftchaild(i)
            }else{
                return
            }
            
        }
    }
    heapsort(){
        const shortedarray = []
        const size = this.size();
        for(let i=0;i<=size;i++){
            shortedarray.push(this.heap[0])
            this.swap(0,this.size())
            this.heap.pop()
            this.shiftdown(0)
        }
        return shortedarray
    }
}