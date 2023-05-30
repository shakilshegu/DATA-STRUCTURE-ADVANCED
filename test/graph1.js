class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addvertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
            
        }
    }
    addedge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addedge(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addedge(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    dfs(vertex) {
        const v = new Set()
        const s = [vertex]
        const res = []
        while (s.length > 0) {
            let curr = s.pop()
            if (!v.has(curr)) {
                res.push(curr)
                v.add(curr)
                for (let e of this.map.get(curr))
                    s.push(e)
            }
        }
        return res
    }

    bfs(vertex) {
        const v = new Set()
        let q = [vertex]
        let res = []
        while (q.length > 0) {
            let curr = q.shift()
            if (!v.has(curr)) {
                v.add(curr)
                res.push(curr)
                for (let e of this.map.get(curr))
                    q.push(e)
            }
        }
        return res
    }
   

}
