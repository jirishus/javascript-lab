function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];

  while (queue.length) {
    // dequeue the node we are going to process
    const node = queue.shift();

    if (visited.has(node)) continue;
    visited.add(node);

    // process neighbors
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }
}