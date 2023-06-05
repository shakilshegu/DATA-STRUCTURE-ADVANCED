class Node{
    constructor(){
        this.children={}
        this.isword = false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }
    insert(word){
        let curr = this.root
        for(let char of word ){
            if(!curr.children[char]){
                curr.children[char] = new Node()
            }
            curr = curr.children[char]
        }
        curr.isword =true
    }
}