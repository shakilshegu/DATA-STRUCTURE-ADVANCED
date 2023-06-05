class minheap{
    constructor(){
        this.heap = []
    }
    leftchaild(i){
        return 2*i+1
    }
    rightchaaild(i){
        return 2*i+2
    }
    parants(i){
        return Math.floor((i-1)/2)
    }
    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]];
    }
    size(){
        return this.heap.length-1
    }
    insert(value){
        this.heap.push(value)
        this.shiftup(this.size())
    }
    shiftup(i){
        while(i>=0 && this.heap[i]<this.heap[this.parants(i)]){
            this.swap(i,this.parants(i))
            i= this.parants(i)
        }
    }

}