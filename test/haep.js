class Node{
    constructor(){
        this.children  ={}
        this.isword = false
    }
}

class Trie{
    constructor(){
        this.root = null
    }
    insert(word)
    {
        let curr =this.root
        for(let char of word){
            if(!curr.children[char]){
                curr.children[char] = new Node()
            }
            curr = curr.children[char]
        }
        curr.isword = true
    }
    search(word){
        let curr = this.root
        for(let char of word){
            if(!curr.children[char]){
                return false
            }
            curr =curr.children[char]
        }
        return curr.isword
    }
    printwords(){
        let word = []
        this.collections(this.root, ' ',word)
        return word
    }

}