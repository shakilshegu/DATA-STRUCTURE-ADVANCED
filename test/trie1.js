class TrieNode {
    constructor(){
        this.children = new Map();
        this.isEndofword = false
    }
}

class tri {
    constructor(){
        this.root = new TrieNode();
    }
}