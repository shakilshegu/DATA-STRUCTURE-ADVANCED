class  TrieNode{
      constructor(){
        this.children = new Map()
        this.endofWord = false
      }
}


class trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let node = this.root
        for(let i= 0;i<word.length;i++){
         if(!node.children.has(word[i]))node.children.set(word[i],new TrieNode())
         node = node.children.get(word[i])
        }
        node.endofWord = true
    }



}