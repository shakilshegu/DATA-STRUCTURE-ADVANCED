class Node{
    constructor(){
        this.children = {}
        this.isword = false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let curr = this.root
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
            curr = curr.children[char]
        }
        return curr.isword
    }
    findsuffics(suffix){
        let currentNode = this.root
        let suffixIndex = suffix.length-1;
        while(suffixIndex >=0 && currentNode){
            const char = suffix[suffixIndex]
            if(!currentNode.children[char]){
                return null;
            }
            currentNode = currentNode.children[char]
            suffixIndex --
        }
        return currentNode;
    }
    printwords(){
        let words=[]
        this.collectWords(this.root,'',words)
        return words
    }
    collectWords(root,prefix,words){
        if(root.isword){
            words.push(prefix)
        }
        for(const char in root.children){
            this.collectWords(root.children[char],prefix+char,words)
        }
    }
}
const trie=new Trie()
trie.insert("hello")
trie.insert("son")
trie.insert("moon")
trie.insert("hat")

// console.log(trie.root)
// console.log(trie.root.children["h"])
// console.log(trie.findSuffixNode(""))
console.log(trie.printwords())