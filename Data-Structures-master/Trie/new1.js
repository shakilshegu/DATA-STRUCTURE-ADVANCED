class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = new Set();
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1]) {
        this.addVertex(vertex1); // Fix: Correct method name to addVertex
      }
      if (!this.adjacencyList[vertex2]) {
        this.addVertex(vertex2); // Fix: Correct method name to addVertex
      }
      this.adjacencyList[vertex1].add(vertex2);
      this.adjacencyList[vertex2].add(vertex1);
    }
    
    dfs(startVertex){
      let visited = new Set()
      const explore = vertex => {
          visited.add(vertex)
          console.log(vertex);
          for(let neighbour of this.adjacencyList[vertex]){
              if(!visited.has(neighbour)){
                  explore(neighbour)
              }
          }
      }
      explore(startVertex)
    }
    isCyclic(){
        const visited = new Set()
        for(let vertex in this.adjacencyList){
            if(!visited.has(vertex)){
                if(this.dfs(vertex,visited,null)){
                    return true
                }
            }
        }
        return false
    }
  
    display() {
      for (let vertex in this.adjacencyList) {
        console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
      }
    }
  }
  
  const graph = new Graph();
  graph.addEdge("A", "B");
  graph.addEdge("B", "C");
  graph.display();
  