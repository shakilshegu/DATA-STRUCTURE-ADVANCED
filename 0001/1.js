class Node{
     constructor(){
        this.childrens = {}
        this.isWords = false
     }
}

class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let current = this.root
        for(let char of word){
            if(!current.childrens[char]){
                current.childrens[char] = new Node()
            }
            current= current.childrens[char]
        }
        current.isWords = true
    }
}